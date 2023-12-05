var userRpc = prompt("가위, 바위, 보 중에 하나를 입력해주세요:");
var comRpc = Math.floor(Math.random() * 3 + 1);
var winDrawLose = "";

if(comRpc == 1)
{
    comRpc = "가위";
}
if(comRpc == 2)
{
    comRpc = "바위";
}
if(comRpc == 3)
{
    comRpc = "보";
}

switch(userRpc)
{
    case "가위" :
        switch(comRpc)
        {
            case "가위" :
                winDrawLose = "Draw";
                break;
            case "바위" :
                winDrawLose = "Lose";
                break;
            case "보" :
                winDrawLose = "Win";
                break;
        }
    case "바위" :
        switch(comRpc)
        {
            case "가위" :
                winDrawLose = "Win";
                break;
            case "바위" :
                winDrawLose = "Draw";
                break;
            case "보" :
                winDrawLose = "Lose";
                break;
        }
    case "보" :
        switch(comRpc)
        {
            case "가위" :
                winDrawLose = "Lose";
                break;
            case "바위" :
                winDrawLose = "Win";
                break;
            case "보" :
                winDrawLose = "Draw";
                break;
        }
    break;
}

dw("유 저 :" + userRpc);
br();
dw("컴퓨터 :" + comRpc);
br();
dw(winDrawLose);