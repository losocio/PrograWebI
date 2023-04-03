
export default function AccordionList({elements}) {


    return(
        <div className="accordion" id="accordionID">
            {elements.map((element) => {
                return(
                    <div key={element.id} className="accordion-item">
                        <h2 className="accordion-header" id={"heading-"+element.id}>
                            <button className="accordion-button" type="button" data-bs-toggle="collapse" 
                            data-bs-target={"#collapse-"+element.id} aria-expanded="false" aria-controls={"collapse-"+element.id}>
                                {element.title}
                            </button>
                        </h2>
                        <div id={"collapse-"+element.id} className="accordion-collapse collapse" 
                        aria-labelledby={"heading-"+element.id} data-bs-parent="#accordionID">
                            <div className="accordion-body">
                                {element.completed+""}
                                <br></br>
                                <br></br>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima quia enim sapiente ut mollitia! Inventore, quaerat quisquam vitae beatae odio sint ex labore ea earum facere quod sed, minus eum!</p> 
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}
/*
        <div className="accordion" id="accordionExample">
        <div className="accordion-item">
            <h2 className="accordion-header" id="headingOne">
                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    Accordion Item #1
                </button>
            </h2>
            <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                    sa
                </div>
            </div>
        </div>
*/