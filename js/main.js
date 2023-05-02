$(document).ready(function () {
    // 노래 이미지와 mp3 파일
    var music_img_list = ["./images/Riptide.jpeg", "./images/Lonely.jpeg", "./images/Moonlight.jpeg"];
    var music_list = ["./music/Riptide.mp3", "./music/Lonely.mp3", "./music/Moonlight.mp3"];

    // 태그 변수에 담기
    var music_img = document.getElementById("music_img");
    var music = document.getElementById("music");

    // 배열 값
    var music_idx = 0;
    var ifplay = 0;

    // pause 버튼 숨기기
    $(".pauseBtn").hide();

    // audio 태그에 src 값 주가
    $("#music").attr("src", music_list[music_idx]);
    // img 태그에 src 값 주기
    $("#music_img").attr("src", music_img_list[music_idx]);


    // 노래 일시 정지
    $(".pauseBtn").click(function () {
        ifplay = 0;
        music.pause();
        $(".playBtn").show();
        $(".pauseBtn").hide();
    })

    // 노래 재생
    $(".playBtn").click(function () {
        ifplay = 1;
        music.play();
        $(".pauseBtn").show();
        $(".playBtn").hide();
    })

    // 이전 곡으로 넘어가기
    $(".prevBtn").click(function () {
        if (music_idx <= 0) {
            alert("이전 곡이 없습니다!");
            return false;
        }
        music_idx--;
        $("#music").attr("src", music_list[music_idx]);
        $("#music_img").attr("src", music_img_list[music_idx]);
        music.play();
        ifplay = 1;
        $(".pauseBtn").show();
        $(".playBtn").hide();
    })

    // 다음 곡으로 넘어가기
    $(".nextBtn").click(function () {
        if (music_idx == music_list.length - 1) {
            alert("다음 곡이 없습니다!");
            return false;
        }
        music_idx++;
        $("#music").attr("src", music_list[music_idx]);
        $("#music_img").attr("src", music_img_list[music_idx]);
        music.play();
        ifplay = 1;
        $(".pauseBtn").show();
        $(".playBtn").hide();
    })

    // 노래가 끝났을 때 다음 곡 자동 재생
    music.addEventListener('ended', function () {
        if (music_idx == music_list.length - 1) {
            alert("마지막 곡입니다!");
            music_idx = 0;
        } else {
            music_idx++;
        }
        $("#music").attr("src", music_list[music_idx]);
        $("#music_img").attr("src", music_img_list[music_idx]);
        music.play();
    });

    console.log($(window).height());
});