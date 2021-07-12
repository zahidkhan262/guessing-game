let cards=[
    {
        image:"https://i.pinimg.com/originals/de/42/15/de421571a33cd8305585409b45be98df.png",
        value: 1,
        status:"closed"
    },
    {
        image:"https://i.pinimg.com/originals/de/42/15/de421571a33cd8305585409b45be98df.png",
        value: 1,
        status:"closed"
    },
    {
        image:"https://i.pinimg.com/originals/f8/ff/e0/f8ffe02ebe7c8e119e758d569df79fcf.png",
        value: 2,
        status:"closed"
    },
    {
        image:"https://i.pinimg.com/originals/f8/ff/e0/f8ffe02ebe7c8e119e758d569df79fcf.png",
        value: 2,
        status:"closed"
    },
    {
        image:"https://i.pinimg.com/236x/1b/ad/72/1bad729c8e6f38f6a4010dae44017bcb.jpg",
        value: 3,
        status:"closed"
    },
    {
        image:"https://i.pinimg.com/236x/1b/ad/72/1bad729c8e6f38f6a4010dae44017bcb.jpg",
        value: 3,
        status:"closed"
    },
    {
        image:"https://media.wired.com/photos/5932bdcd95879f6d0c009d66/master/pass/thor-hemsworth.jpg",
        value: 4,
        status:"closed"
    },
    {
        image:"https://media.wired.com/photos/5932bdcd95879f6d0c009d66/master/pass/thor-hemsworth.jpg",
        value: 4,
        status:"closed"
    }
]



let temp;
for(let i=cards.length-1; i>=0; i--){

    let j=Math.floor(Math.random()*(i+1));

    temp=cards[i];
    cards[i]=cards[j];
    cards[j]=temp;
}

let cardCopy=cards;



function displayCard(data){

    let cardString="";

    data.forEach( function(card,index){

        cardString+= `

        <div class="card" style="background-image:url('${card.image}')">

        <div class="overlay ${card.status}" onclick="openCard(${index})">Select</div>
        </div>`;
        
    });

    document.getElementById('cards').innerHTML=cardString;
}
displayCard(cards);

let score=0;
let cardCount=1
let val1=null, val2=null;

function openCard(index){

    cards[index].status="opened";

    if(cardCount===1){
        val1=cards[index].value;
        cardCount++;
    }else if(cardCount==2){
        val2=cards[index].value;

        if(val1===val2){
            score++;
            document.getElementById('score').innerText=score;
            
            val1=null;
            val2=null,
            cardCount=1;
        }
        else{
            alert("Try Again.....")
            location.reload();
        }
    }
    
    displayCard(cards);
}
