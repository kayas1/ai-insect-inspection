

function Header(){
    return (
        <h1>Result</h1>
    );
};

function Name(){
    return (
        <div>
            <span>검거세미나방</span>
            <span>92%</span>
        </div>
    );
};

function Images(){
    return (
        <div>
            <img src={null}/>
            <img src={null}/>
        </div>
    );
};

function MoreInformation(){
    return(
        <div>
            <button>more Information</button>
        </div>
    );
};

function ResultScreen(){
    return(
        <div>
            <Header/>
            <Name/>
            <Images/>
            <MoreInformation/>
        </div>
    );
};

export default ResultScreen;