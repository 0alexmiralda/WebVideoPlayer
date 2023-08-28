const $video = document.querySelector("#video")

//Reproducir y pausa
const $play = document.querySelector("#play")
const $pause = document.querySelector("#pause")
//Adelantar y retroceder
const $forward = document.querySelector("#forward")
const $backward = document.querySelector("#backward")
//player__progress
const $progress = document.querySelector("#progress")

$pause.hidden = true

function handlePlay() {
    $video.play()
    $play.hidden = true
    $pause.hidden = false
    console.log('click play')
}

function handlePause() {
    $video.pause()
    $play.hidden = false
    $pause.hidden = true
    console.log('click pause')
}

function handleBackward() {
    $video.currentTime -= 10
    console.log("click backward", $video.currentTime)
}

function handleForward() {
    $video.currentTime += 10
    console.log("click forward", $video.currentTime)
}

function handleDuration() {
    $progress.max = $video.duration
    console.log("Video loaded", $video.duration)

}

function handleTimeUpdate() {
    $progress.value = $video.currentTime
    console.log('Time', $video.currentTime)
}

function playerProgress() {
    $progress.max = $video.duration
    $video.currentTime = $progress.value
    console.log("click in player progress", $progress.value)

}

$play.addEventListener('click', handlePlay)
$pause.addEventListener('click', handlePause)
$backward.addEventListener('click', handleBackward)
$forward.addEventListener('click', handleForward)
$video.addEventListener('loadedmetadata', handleDuration)
$video.addEventListener('timeupdate', handleTimeUpdate)
$progress.addEventListener('input', playerProgress)