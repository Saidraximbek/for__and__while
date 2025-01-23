// For1. a va b butun sonlari berilgan (a < b).
// a va b sonlari orasidagi barcha butun sonlarni (a va b ni ham) chiqaruvchi va chiqarilgan sonlar sonini chiqaruvchi programma tuzilsin. (a va b xam chiqarilsin).
// let a =5;
// let b = 19;
// let counter = 0
// for(let i = a; i<=b; i++){

//    counter++
//    console.log(i);
//    if(i>= b){
//     console.log(counter, 'ta son bor');
//     break

//    }

// }

// For2. a va b butun sonlari berilgan (a < b). a va b sonlari orasidagi barcha butun sonlarni (a va b dan tashqari)
// kamayish tartibida chiqaruvchi va chiqarilgan sonlar sonini chiqaruvchi progma tuzilsin.
// let a =8;
// let b = 19;
// let counter = 0
// for(let i = b-1; i>a; i--){
//    counter++
//    console.log(i);

//       if(i==a+1){
//        console.log(counter, 'ta son bor');

//       }
// }

// For3. Bir kg konfetning narxi berilgan (haqiqiy son). 1, 2, 10 kg konfetni narxini chiqaruvchi programma tuzilsin.
// let price = 20000;
// for(let i = 1; i<=10; i++){
//     if(i==1 || i==2 || i==10){

//         console.log(i*price);

//     }
// }

// For4. Bir kg konfetning narxi berilgan (haqiqiy son). 1.2, 1.4, ..., 2 kg konfetni narxini chiqaruvchi programma tuzilsin.

// let price = 20000;
// for(let i = 1.2; i<=2; i=i+0.2){

//         console.log(Math.round(i*price));

// }

// For5. a va b butun sonlari berilgan (a < b). a dan b gacha bo'lgan barcha butun sonlar yig'indisini chiqaruvchi programma tuzilsin.
// let a = 5;
// let b = 10;
// let summ = 0;
// for (let i = a; i<=b; i++){
//   summ+=i;

// }
// console.log(summ);

// For6. a va b butun sonlari berilgan (a < b). a dan b gacha bo'lgan barcha butun sonlar ko'paytmasini chiqaruvchi programma tuzilsin.
// let a = 5;
// let b = 10;
// let summ = 1;
// for (let i = a; i<=b; i++){
//   summ*=i;

// }
// console.log(summ);

// For7. a va b butun sonlari berilgan (a < b). a dan b gacha bo'lgan barcha butun sonlar kvadratlarining yig'indisini chiqaruvchi programma tuzilsin.
// let a = 5;
// let b = 10;
// let summ = 1;
// for (let i = a; i<=b; i++){
//   summ+=i**2;

// }
// console.log(summ);

// For8. n butun soni berilgan (n > 0). Quyidagi yig'indini hisoblovchi programma tuzilsin. S=1+1/2+1/3+...+1/n
// let n=8;
// let summ=0;
// for(let i = 1; i<=n; i++){
//     summ+=1/i;
// }
// console.log(summ.toFixed(2));

// For9. n butun soni berilgan (n > 0). Quyidagi ko'paytmani hisoblovchi programma tuzilsin. S=1.1*1.2* 1.3*... *n
// let n=2;
// let summ=1;
// for(let i = 1.1; i<=n; i=i+0.1){
//     summ*=i;
// }
// console.log(summ.toFixed(2));

// For10. n butun soni berilgan (n > 0). Shu sonning kvadratini quyidagi formula asosida hisoblovchi programma tuzilsin.
// n^2=1+3+5+... + (2*n-1)
// Har bir qo'shiluvchidan keyin natijani ekranga chiqarib boring. Natijda ekranda 1 dan n gacha bo'lgan sonlar kvadrati chiqariladi.
// let n=10;
// let summ = 0;
// for(let i=1; i<=n; i++){
//   summ+=2*i-1;
//   console.log(summ);

// }

// For11. n butun soni va a haqiqiy soni berilgan (n > 0). a ning n - darajasini aniqlovchi programma tuzilsin.
// a^n=a*a*a...a;
// let n=10;
// let a=2;
// let summ=1;
// for(let i=1; i<=n; i++){
//  summ*=a
// }
// console.log(summ);

// For12. n butun soni va a haqiqiy soni berilgan (n > 0). Bir sikldan foydalanib a ning 1 dan n gacha bo'lgan barcha darajalarini chiqaruvchi programma tuzilsin.
// let n=10;
// let a=2;
// for(let i = 1; i<=n; i++){
// console.log(a**i);

// }

// For13. n butun soni va a haqiqiy soni berilgan (n > 0).
// Bir sikldan foydalanib quyidagi a ning 1 dan n gacha bo'lgan barcha darajalarini chiqaruvchi va yig'indini hisoblovchi programma tuzilsin.
// S = 1+a^1+a^2 + a^3 + ... a^n
// let n=6;
// let a=2;
// let summ = 0;
// for(let i = 0; i<=n;i++){
//     summ+=a**i
//    console.log(a**i);

// }
// console.log(summ, "kvadratlar yigindisi");

// For14. n butun soni berilgan (n > 0). Bir sikldan foydalangan holda quyidagi yig'indini hisoblovchi programma tuzilsin.
// S = 1! + 2! + 3! + ... + n!

// let n = 5;
// let S = 0;

// for (let i = 1; i <= n; i++) {
//   let K = 1;
//   for (let j = 1; j <= i; j++) {
//     K *= j;
//   }
//   console.log(K);
//   S+=K
// }

// console.log(`Summa=${S}`);

// For15. N va K butun sonlari berilgan. Quyidagi yig'indini chiqaruvchi programma tuzilsin.
// S = 1^K + 2^K + ... + N^K
// let N=5;
// let K=8;
// let S=0;
// for(let i=1; i<=N; i++){
//     S+=i**K;
// }
// console.log(S);

// For16. N butun soni berilgan. Quyidagi yig'indini chiqaruvchi programma tuzilsin.
// S = 1^1 + 2^2 + … + N^N
// let N=5;
// let summa=0
// for(let i=1; i<=N; i++){
//   summa+=i**i;
// }
// console.log(summa);

// For17. A va B butun soni berilgan (A < B). A va B sonlari orasidagi barcha butun sonlarni chiqaruvchi programma tuzilsin.
//  Bunda A soni 1 marta, (A + 1) soni 2 marta chiqariladi va xokazo.
// let A = 5;
// let B = 20;
// for(let i=A; i<=B; i++){
//   for(let j = 1; j<=i; j++)
//     console.log(i);

// }

// For18. Sonning barcha bo’luvchilarini, ularning sonini va yig’indisini chiqaruvchi dastur tuzing.
// let son = 20;
// let summ = 0;
// let counter = 0;
// for(let i=1; i<=son; i++){
//     if(son%i==0){
//         console.log(i);
//         summ+=i;
//         counter++

//     }
// }
// console.log(`${summ}-boluvchilar yi'indisi,   ${counter}-bo'luvchilar soni`);

// For19. n butun soni berilgan (n > 1). N sonini tub yoki tub emasligini aniqlovchi programma tuzilsin.
// let n = 101;
// let counter = 0;
// for (let i = 1; i <= n; i++) {
//   if (n % i == 0) {
//     counter++;
//   }
// }
// if (counter <= 2) {
//   console.log("tub son");
// }else{
//     console.log("tub son emas");
// }

// For20. Sonlarni quyidagi tartibda chiqaruvchi dastur tuzing. N = 5 bo’lganda,
// 1
// 1 2
// 1 2 3
// 1 2 3 4
// 1 2 3 4 5

// let N = 10;
// let result = []
// for(let i=1; i<=N; i++){
//         result+=i
//         console.log(result);

// }

// While1. A va B butun musbat sonlari berilgan (A> B). A usunlikdagi kesmada maksimal darajada B kesma joylashtirilgan.
// A kesmaning bo'sh qismini aniqlovchi programma tuzilsin. Ko'paytirish va bo'lish amallarini ishlatmang.
// let A = 150;
// let B= 0;
// while (A>B){
//     if (B=A-1) {
//         console.log(`Aning qolgan Qismi doimo 1 bo'ladi. Chunki A kesmada B kesma maximal joylashtirilgan. A=${A} B=${B}`);
        
//         break
//     }
    
//     B++
// }


// While2. A va B butun musbat sonlari berilgan (A > B). A usunlikdagi kesmada B kesmadan nechta joylashtirish mumkinligini aniqlovchi programma tuzilsin.
// Ko'paytirish va bo'lish amallarini ishlatmang.
// let A = 13;
// let B = 3;
// let summ = B;
// let counter = 0;
// while (summ < A) {
//   summ += B
//   counter++;
// }
// console.log(counter);

// While3. n butun soni berilgan (n > 0). Agar n soni 3 ning darajasi bo'lsa "3 - ning darajasi", aks xolda "3 - ning darajasi emas” degan natija chiqaruvchi programma tuzilsin.
//  Qoldiqli bo'lish va bo'lish amallarini ishlatmang.
// let n = 27;
// let i = 1;
// while (3 ** i <= n) {
//   i++;

// if(n===3**i){
//     console.log(`3ning darajasi`);
//   } 
  
// }

// While4. n va m butun musbat sonlari berilgan (n > m). n sonini m soniga bo'lib butun va qoldiq qismlarini bo'lish
// va qoldiqni olish amallarini ishlatmasdan topuvchi programma tuzilsin.
// let n=21;
// let m=6;
// let i = 1;
// while(m*i<=n){
//   i++
// }
// let butun = (i-1);
// let qoldiq = n-butun*m;
// console.log(`Butun son - ${butun},   Qoldiq son - ${qoldiq}`);



// While5. n butun soni berilgan (n > 0). Bo'lib butun va qoldiq qismlarini aniqlash orqali, berilgan son raqamlarini teskari tartibda chiqaruvchi programma tuzilsin.
// let n=123;
// while(n>0){
//     let qoldiq = n%10;
//     console.log(qoldiq);
//     n=Math.floor(n/10);
    
// }



// While6. n butun soni berilgan (n > 0). Bo'lib butun va qoldiq qismlarini aniqlash orqali, berilgan son raqamlari yig'indisini va raqamlari sonini chiqaruvchi programma tuzilsin.
// let n=1254788;
// let summ = 0;
// let counter = 0;
// while(n>0){
//   let qoldiq = n%10;
//   summ += qoldiq;
//   n = Math.floor(n/10);
//   counter++
// }
// console.log(`Raqamalari yigindisi = ${summ}, raqamlari soni = ${counter}`);

// While7. n butun soni berilgan (n > 0). Bo'lib butun va qoldiq qismlarini aniqlash orqali, berilgan son raqamlarining orasida 2 raqami bor-yo'qligini aniqlovchi programma tuzilsin.
// let n = 57825214;
// let s = ''
// while(n>0){
//     let qoldiq = n%10;
//     n = Math.floor(n/10);
//     s += qoldiq

    
// }
//  if(s.includes(2)==true){
//         console.log("2 raqami mavjud");
        
//     }else{
//         console.log("2 raqami mavjud emas");
        
//     }


// While8. n butun soni berilgan (n > 0). 
// Bo'lib butun va qoldiq qismlarini aniqlash orqali, berilgan son raqamlarining orasida toq raqamlar bor-yo'qligini aniqlovchi programma tuzilsin.
// let n = 24688643;
// let s = ''
// while(n>0){
//     let qoldiq = n%10;
//     n = Math.floor(n/10);
//     if(qoldiq%2==1){
//         s+=qoldiq
//     } 

    
// }

// if(s.length>0){
//     console.log("Toq son mavjud")
// }else{
//      console.log("Toq son mavjud emas")
// }


// While9. Palindromik songa tekshirish dasturini yozing. True yoki False qaytarsin.
// Palindromik son – boshidan va oxiridan o’qilish bir xil bo’lgan son, masalan 1345431, 45788754
// let n = 123454320;
// let oxiridan = ''
// let boshidan = ''
// while(n>0){
//     qoldiq = n%10;
//     n=Math.floor(n/10);
//     oxiridan += qoldiq;
  
// }






// While10. n butun soni berilgan (n > 1). N sonini tub yoki tub emasligini aniqlovchi programma tuzilsin.
// let n = 7
// let son = []
// let i = 1;

// while(i<=n){
//     if(n%i==0){
//      son.push(i)
//     }

//     i++
// }
// if(son.length>2){
//     console.log("Tub son emas");
    
// }else{
//     console.log("tub son");
    
// }

