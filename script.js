function calcolaSettimaneEMesi() {
    const giorno = parseInt(document.getElementById('giorno').value);
    const mese = parseInt(document.getElementById('mese').value);
    const anno = parseInt(document.getElementById('anno').value);

    if (isNaN(giorno) || isNaN(mese) || isNaN(anno) || giorno < 1 || mese < 1 || mese > 12 || anno < 1900) {
        document.getElementById('risultato').innerHTML = "Inserisci una data valida.";
        return;
    }

    const dataInizio = new Date(anno, mese - 1, giorno);
    const dataOggi = new Date();

    if (dataInizio > dataOggi) {
        document.getElementById('risultato').innerHTML = "La data di inizio gravidanza non può essere nel futuro.";
        document.getElementById('dataParto').innerHTML = "";
        document.getElementById('immagine').innerHTML = "";
        return;
    }

    const differenza = dataOggi - dataInizio;
    const giorniTrascorsi = Math.floor(differenza / (1000 * 60 * 60 * 24));
    const settimane = Math.floor(giorniTrascorsi / 7);
    const mesi = (settimane / 4.3).toFixed(1);

    const dataParto = new Date(dataInizio);
    dataParto.setDate(dataInizio.getDate() + (40 * 7));

    document.getElementById('risultato').innerHTML = `Hai completato ${settimane} settimane, ovvero circa ${mesi} mesi di gravidanza.`;
    document.getElementById('dataParto').innerHTML = `Data stimata del parto: ${dataParto.toLocaleDateString('it-IT')}`;

    // Inserisci l'immagine scaricata sulla sinistra
    const immagineContainer = document.getElementById('immagine');
    const immagine = 'img/immagine-feto.jpeg'; // Percorso relativo all'immagine
    immagineContainer.innerHTML = `<img src="${immagine}" alt="Embrione o Feto" style="float: left; margin-right: 20px; max-width: 150px; border-radius: 8px;">`;
}
