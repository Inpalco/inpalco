// app/form/page.js
"use client";

import { useState } from "react";

export default function ResearchForm() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [mensagem, setMensagem] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess(false);

    // Envia os dados para a API
    const response = await fetch("/api/send-research", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ nome, email, mensagem }),
    });

    if (!response.ok) {
      setError('Ocorreu um erro ao enviar a mensagem');
      setLoading(false);
    } else {
      setSuccess(true);
      setLoading(false);
      e.target.reset();
    }
  };

  const inputStyle = "w-full p-2 border rounded-3xl hover:border-purple-500 transition";

  return (
    <form onSubmit={handleSubmit} className="md:w-96 w-full mx-auto">
      <div className="mb-4">
        <label htmlFor="name" className="block mb-2">Nome: </label>
        <input
          type="text"
          name="name"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          required
          className={inputStyle}
        />
      </div>
      <div className="mb-4">
        <label htmlFor="email" className="block mb-2">Email</label>
        <input
          type="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className={inputStyle}
        />
      </div>
      <div className="mb-4">
        <label htmlFor="message" className="block mb-2">Mensagem</label>
        <textarea
          value={mensagem}
          name="message"
          onChange={(e) => setMensagem(e.target.value)}
          required
          className={inputStyle}
        ></textarea>
      </div>

      <button
        type="submit"
        disabled={loading}
        className="text-white font-medium text-lg bg-purple-700 text-center py-4 px-8 rounded-full w-full transition mt-2 hover:bg-orange-500 md:w-max hover:scale-105 hover:drop-shadow-lg"
      >
        {loading ? 'Enviando...' : 'Enviar Mensagem'}
      </button>

      {success && <p className="mt-4 text-green-600">Pesquisa enviada com sucesso!</p>}
      {error && <p className="mt-4 text-red-600">{error}</p>}
    </form>
  );
}
