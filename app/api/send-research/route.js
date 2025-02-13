const { google } = require('googleapis');
const path = require('path');

export async function POST(req) {
    const { nome, email, mensagem } = await req.json();
  
    // Aqui você pode salvar os dados em um banco de dados ou enviar para o Google Sheets.
    try {
      // Exemplo: Enviar os dados para o Google Sheets ou outra plataforma.
      await enviarParaGoogleSheets(nome, email, mensagem);
  
      return new Response(JSON.stringify({ message: "Formulário enviado com sucesso!" }), { status: 200 });
    } catch (error) {
      return new Response(JSON.stringify({ error: "Erro ao enviar os dados." }), { status: 500 });
    }
  }
  
  async function enviarParaGoogleSheets(nome, email, mensagem) {
    // Caminho para o arquivo de credenciais (assumindo que ele está na raiz do projeto)
    const credentialsPath = path.join(process.cwd(), 'credenciaisInpalcoPlanilhas.json');
  
    // Cria a autenticação com a API do Google
    const auth = new google.auth.GoogleAuth({
      keyFile: credentialsPath, // Caminho para o arquivo JSON das credenciais
      scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    });
  
    // Instancia o cliente de API do Google Sheets
    const sheets = google.sheets({ version: 'v4', auth });
  
    const request = {
      spreadsheetId: '1PJtrW_ItYQrmP-_3-Xo31m5Wmn4BYFXBj9RlgjWThQ0', // ID da sua planilha (encontrado na URL)
      range: 'Respostas!A2:C2', // O intervalo onde você deseja adicionar os dados
      valueInputOption: 'RAW',
      resource: {
        values: [[nome, email, mensagem]], // Os dados a serem enviados
      },
    };
  
    try {
      // Envia os dados para a planilha
      await sheets.spreadsheets.values.append(request);
    } catch (error) {
      console.error('Erro ao enviar dados para o Google Sheets:', error);
      throw error;
    }
  }
  