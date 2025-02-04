'use client';

import { useState } from 'react';

export default function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess(false);

    const formData = new FormData(e.target);

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        body: JSON.stringify(Object.fromEntries(formData)),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error('Falha ao enviar mensagem');
      }

      setSuccess(true);
      e.target.reset();
    } catch (err) {
      setError(err.message || 'Ocorreu um erro ao enviar a mensagem');
    } finally {
      setLoading(false);
    }
  };

  const inputStyle = "w-full p-2 border rounded-3xl hover:border-purple-500 transition";

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto">
      <div className="mb-4">
        <label htmlFor="name" className="block mb-2">Nome:</label>
        <input
          type="text"
          id="name"
          name="name"
          required
          className={inputStyle}
        />
      </div>

      <div className="mb-4">
        <label htmlFor="email" className="block mb-2">E-mail:</label>
        <input
          type="email"
          id="email"
          name="email"
          required
          className={inputStyle}
        />
      </div>

      <div className="mb-4">
        <label htmlFor="phone" className="block mb-2">Telefone ou Whatsapp (opcional):</label>
        <input
          type="tel"
          id="phone"
          name="phone"
          className={inputStyle}
        />
      </div>

      <div className="mb-4">
        <label htmlFor="message" className="block mb-2">Mensagem (opcional):</label>
        <textarea
          id="message"
          name="message"
          className={`${inputStyle} h-20`}
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="text-white font-medium text-lg bg-purple-700 text-center py-4 px-8 rounded-full w-full transition mt-2 hover:bg-orange-500 md:w-max hover:scale-105 hover:drop-shadow-lg"
      >
        {loading ? 'Enviando...' : 'Enviar Mensagem'}
      </button>

      {success && <p className="mt-4 text-green-600">Mensagem enviada com sucesso!</p>}
      {error && <p className="mt-4 text-red-600">{error}</p>}
    </form>
  );
}