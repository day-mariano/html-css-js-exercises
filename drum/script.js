//Evento para captar a tecla que for digitada
document.body.addEventListener('keyup', (event)=>{
    playSound( event.code.toLowerCase() );
});

document.querySelector('.composer button').addEventListener('click', () => {
    let song = document.querySelector('#input').value;

    if(song !== '') {
        let songArray = song.split('');
        playComposition(songArray);
    }
});

//Verificar se tem áudio para tecla digitada
function playSound(sound){
    let audioElement = document.querySelector(`#s_${sound}`);
    let keyElement = document.querySelector(`div[data-key="${sound}"]`);
//zerar áudio e tocar
    if(audioElement) {
        audioElement.currentTime = 0;
        audioElement.play();
    }
//resposta visual da tecla
    if(keyElement) {
        keyElement.classList.add('active');

        setTimeout(()=>{
            keyElement.classList.remove('active');
        }, 300);
    } 
}
//Transformar os digitos em um array, fazendo loop em cada tecla 
function playComposition(songArray) {
    let wait = 0;
//colocar tempo entre os sons
    for(let songItem of songArray) { 
        setTimeout(()=>{
            playSound(`key${songItem}`);
        }, wait);

        wait += 250;
    }
}