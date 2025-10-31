"use client";

import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Aos from "aos";
import { CategoryCard } from "@/components/VariableHandler/handler";
import { Skeleton } from "@mui/material";
import { useSelector } from "react-redux";

export default function ServiceCategory(){
    const loader = useSelector((state) => state.ui.loader);
    const serviceCategory = useSelector((state) => state.service.serviceCategory);
    const apiDataAvailable = useSelector((state) => state.ui.apiDataAvailable);
    useEffect(() => {
        Aos.init();
    }, []);

    if(loader){
        return <Skeleton variant="circular"></Skeleton>
    }

    return(
        <section className="py-5 category-section"  data-aos="fade-up" data-aos-duration="1500">
            <Container fluid>
                <div className="box">
                    {
                        apiDataAvailable && serviceCategory ? (
                            serviceCategory.map((card, index) => (
                                <div key={`servicecat-${index}`} className="rectangle" data-aos="zoom-in" data-aos-duration="1500">
                                    <div className="frame">
                                        <div className="warehouse"><div dangerouslySetInnerHTML={{__html: card.icon}}/></div>
                                        <div className="text-wrapper">
                                            {card.category}
                                        </div>
                                        <ul className="check-list">
                                            {card.service_area.map((listitem, index) => <li key={`listitem-${index}`}><i className="fa-solid fa-check"></i> {listitem.service_area}</li>)}
                                        </ul>
                                    </div>
                                </div>
                            ))
                        ) :
                        (
                            CategoryCard.map((card, index) => (
                                <div key={`servicecat-${index}`} className="rectangle" data-aos="zoom-in" data-aos-duration="1500">
                                    <div className="frame">
                                        <div className="warehouse">{card.icon}</div>
                                        <div className="text-wrapper">
                                            {card.title}
                                        </div>
                                        <ul className="check-list">
                                            {card.list.map((listitem, index) => <li key={`listitem-${index}`}><i className="fa-solid fa-check"></i> {listitem}</li>)}
                                        </ul>
                                    </div>
                                </div>
                            ))
                        )
                    }
                </div>
            </Container>
        </section>
    )
}
