export default function AccordionList({geckos}) {

    return(
        <div id="carouselID" className="carousel slide">
            <div className="carousel-inner">
                {
                geckos.map((gecko, index) => {
                    var active = "";
                    if(index === 0) active = " active";
                    return(
                        <div className={"carousel-item"+active}>
                            <img src={gecko} className="d-block w-100" alt="gecko"/>
                        </div>
                    );
                })}
            </div>
            <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselID"
                data-bs-slide="prev"
            >
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carouselID"
                data-bs-slide="next"
            >
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>

    )
    /*
        <div id="carouselID" className="carousel slide">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src="..." className="d-block w-100" alt="..."></img>
                </div>
                <div className="carousel-item">
                    <img src="..." className="d-block w-100" alt="..."></img>
                </div>
                <div className="carousel-item">
                    <img src="..." className="d-block w-100" alt="..."></img>
                </div>
            </div>
            <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselID"
                data-bs-slide="prev"
            >
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carouselID"
                data-bs-slide="next"
            >
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>;

    */
}