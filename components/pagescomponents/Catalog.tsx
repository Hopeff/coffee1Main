import React from 'react';
import './Catalog.css'

const Catalog = () => {
    return (
        <div className="catalog">
            <p className="c_catalog">Catalog</p>
            <p className="c_drinks">Drinks</p>
                <div className="coffee_l1">
                    <div className="block11">
                    <p className="coffee_text">
                    americano<br/>
                    0,99$
                    </p>
                    </div>
                 <div className="block12">
                    <p className="coffee_text">
                    cappuccino<br/>
                    1,29$
                    </p>
                 </div>
                 <div className="block13">
                    <p className="coffee_text">
                    mocchiato<br/>
                    1,99$
                    </p>
                 </div>
                </div>
                <div className="coffee_l2">
                    <div className="block14">
                        <p className="c_lat">
                            latte<br/>
                            1,19$
                        </p>
                    </div>
                    <div className="block15">
                        <p className="coffee_text">
                            mocacino<br/>
                            2,19$
                        </p>
                    </div>
                    <div className="block16">
                        <p className="coffee_text">
                            glace<br/>
                            2,99$
                        </p>
                    </div>
                </div>
               <p className="c_des">dissertations</p>
            <div className="coffee_l3">
                <div className="block17">
                    <p className="desert_text">
                        maffins<br/>
                        0,39$
                    </p>
                </div>
                    <div className="block18">
                        <p className="desert_text">
                            croisant<br/>
                            0,99$
                        </p>
                    </div>
                        <div className="block19">
                            <p className="desert_text">
                                pan-cakes<br/>
                                1,99$
                            </p>
                      </div>
                    </div>
                    <div className="coffee_l4">
                        <div className="block20">
                            <p className="desert_text">
                                cheesecake<br/>
                                2,99$
                            </p>
                        </div>
                        <div className="block21">
                            <p className="desert_text">
                                tiramisu<br/>
                                3,99$
                            </p>
                        </div>
                        <div className="block22">
                            <p className="desert_text">
                                fondan<br/>
                                3,99$
                            </p>
                        </div>
                    </div>
            <p className="c_cof">coffee</p>
                    <div className="coffee_l5">
                        <div className="block23">
                            <p className="cb_text">
                             espresso coffee beans<br/>
                                1$
                            </p>
                        </div>
                        <div className="block24">
                            <p className="cb_text">
                                coffee beans with<br/>
                                caramel flavor<br/>
                                2$</p>
                        </div>
                        <div className="block25">
                            <p className="cb_text">
                                medium-rare coffee beans<br/>
                                3$
                            </p>
                        </div>
                    </div>
            </div>
    );
};

export default Catalog;