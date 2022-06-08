//1~9까지의 숫자 중 하나를 입력하면 그 단의 구구단 결과를 한 줄에 출력하는 프로그램을 작성하세요.

//입출력
// 입력 : 2
// 출력 : 2 4 6 8 10 12 14 16 18



// 내 답안
// for 구문을 이용해서 1부터 9까지 n의 값을 곱해주면 된다.
// const n = prompt('한 자리 숫자 아무거나 넣어라');

// for(let i = 1; i < 10; i++){
//     console.log(parseInt(n * i)); 
// }



//본 답안
const num = prompt('1 ~ 9까지의 숫자 중 하나를 입력하세요.')
let result = '';

for (let i=1; i<=9; i++){
    result += i*num + ' ';
}

console.log(result);

// 내 풀이의 잘못된 점은 세로로 하나씩 콘솔 창에 찍힌다는 것이다.
// 한줄로 코드가 나오려면 답안처럼 빈 result 값에 넣어줘야 한다.