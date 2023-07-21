import itparkImg from "./../assets/it-park.png"

function Pagetwo() {
    return(
        <div className="about h-screen flex p-28 gap-12">
            <div className="info text-xl w-1/2 flex flex-col justify-between">
                <h1 className="text-3xl font-bold">Коротко о <span className="text-green-500">IT PARK?</span></h1>
                <p>IT-park — это технологический парк, работающий в области информационных технологий. Место, где активные и талантливые люди превращают свои идеи в реальные бизнес-проекты за счет наличия современной технической инфраструктуры, финансовой и научной поддержки.</p>

                <p>IT PARK работатет по 3 направлениям :
IT Образование, Стартап и Резидентство</p>

                <p>Главной миссией IT PARK является развитие Cферы IT в стране и обеспечить компютерную грамотность среди населения</p>
            </div>
            <img src={itparkImg} className="w-1/2"/>
        </div>
    );
}

export default Pagetwo;
