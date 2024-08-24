//Submit initiation
function submitFunc() {
    // Variables to store the value of Inputs
    let name = document.querySelector('.name').value;
    let email = document.querySelector('.email').value; 
    let password = document.querySelector('.pswrd').value;
    
    if(name == '' || email =='' || password == ''){
        document.querySelector('.error').style.visibility= 'visible' ;
        document.querySelector('.artSection').style.visibility = 'hidden';
    }

    else{
        document.querySelector('.error').style.visibility= 'hidden' ;

        function userNameFunc() {
            return name.trim().replace(' ', '').toLowerCase();
        }
    
        let userName = userNameFunc();
    
        // Selecting the .artistHeading element
        let artistHeading = document.querySelector('.artistHeading');
    
        // Mutating the .artistHeading element using the value of username
        artistHeading.textContent = `Choose your Artist, @${userName}!`;

        //changing visibility of .thanks element
        function visThanks(){
            return document.querySelector('.thanks').style.visibility = 'visible';  
        };
    
        function visArt(){
            return document.querySelector('.artSection').style.visibility = 'visible';  
        };
    
        visThanks();
        visArt();
        return userName;
    }
    
}


//About artist initiation


function abtWeeknd(){
    let artistName = document.querySelector('.artistName');
    let artistAbout = document.querySelector('.artistAbout');
    artistName.textContent = 'TheWeeknd';
    artistAbout.textContent = 'Abel Makkonen Tesfaye, known professionally as the Weeknd, is a Canadian singer-songwriter. He is known for his unconventional musical production, artistic reinventions and use of the falsetto register. Tesfaye began releasing music anonymously in 2009. ';
    function visAbt(){
        document.querySelector('.aboutSection').style.visibility = 'visible';
    };

    function heightRemover(){
        document.querySelector('.artSection').style.height = '0px';
    };

    function imgSrc(){
        document.querySelector('.artistDesc').src = 'Artist_Image/the-weekend.jpeg';
    };

    function weekSpot(){
        return document.querySelector('.spot').href = 'https://open.spotify.com/artist/1Xyo4u8uXC1ZmMpatF05PJ?autoplay=true';
    }
    weekSpot()
    imgSrc();
    heightRemover();
    visAbt();
    return abtWeeknd();
};

function abtBillie(){
    let artistName = document.querySelector('.artistName');
    let artistAbout = document.querySelector('.artistAbout');
    artistName.textContent = 'Billie Eilish';
    artistAbout.textContent = 'Billie Eilish Pirate Baird OConnell is an American singer and songwriter. She first gained public attention in 2015 with her debut single "Ocean Eyes", written and produced by her brother Finneas OConnell, with whom she collaborates on music and live shows.';
    
    function visAbt(){
        document.querySelector('.aboutSection').style.visibility = 'visible';
    };

    function heightRemover(){
        document.querySelector('.artSection').style.height = '0px';
    };

    function imgSrc(){
        document.querySelector('.artistDesc').src = 'Artist_Image/Billie-Eilish.jpg';
    };

    function billieSpot(){
        return document.querySelector('.spot').href = 'https://open.spotify.com/artist/6qqNVTkY8uBg9cP3Jd7DAH?autoplay=true';
    };

    billieSpot()
    imgSrc();
    heightRemover();
    visAbt();
    return abtBillie();
}

function abtDaft(){
    let artistName = document.querySelector('.artistName');
    let artistAbout = document.querySelector('.artistAbout');
    artistName.textContent = 'Daft Punk';
    artistAbout.textContent = 'Daft Punk were a French electronic music duo formed in 1993 in Paris by Thomas Bangalter and Guy-Manuel de Homem-Christo. They achieved early popularity in the late 1990s as part of the French house movement, combining elements of house music with funk, disco, techno, rock and synth-pop.';
    function visAbt(){
        document.querySelector('.aboutSection').style.visibility = 'visible';
    };

    function heightRemover(){
        document.querySelector('.artSection').style.height = '0px';
    };

    function imgSrc(){
        document.querySelector('.artistDesc').src = 'Artist_Image/daft-punk.jpg';
    }

    function daftSpot(){
        return document.querySelector('.spot').href = 'https://open.spotify.com/artist/4tZwfgrHOc3mvqYlEYSvVi?autoplay=true';
    }

    daftSpot();
    imgSrc();
    heightRemover();
    visAbt();
    return abtDaft();
}

function backTo(){
    document.querySelector('.artSection').style.height = 'auto';
    document.querySelector('.aboutSection').style.visibility = 'hidden';
    return backTo();
};

