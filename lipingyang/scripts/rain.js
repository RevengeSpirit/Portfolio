snow = false; // false-��; true-ѩ
snowsym = " * " //���Ƿ���
rainsym = " ' " //������Է�ͼƬ.
howmany = 10 //��ζ���/ѩƬ?
/**************��Ҫ��������Ĳ���***********/
if(snow){sym = snowsym; speed=1; angle=10; drops=howmany}
else{sym = rainsym; speed=50; drops=howmany; angle=6}
movex = -speed/angle; movey = speed; count = 0;
function moverain(){
for(move = 0; move < drops; move++){
xx[move]+=movex; yy[move]+=mv[move];
hmm = Math.round(Math.random()*1);
if(xx[move] < 0){xx[move] = maxx+10;}
if(yy[move] > maxy){yy[move] = 10;}
drop[move].left = xx[move]
drop[move].top = yy[move]+document.body.scrollTop;
}setTimeout('moverain()','1')}
