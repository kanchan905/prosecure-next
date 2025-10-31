import React from "react";
import Link from "next/link";
import styled from "styled-components";
import { Skeleton } from "@mui/material";
import { useSelector } from "react-redux";

export default function JobCard({filter}){
    const career = useSelector((state) => state.content.career);
    const loader = useSelector((state) => state.ui.loader);
    const filterText = filter?.toLowerCase();
    const filteredJobs = (career ?? []).filter(job => 
        job.title.toLowerCase().includes(filterText) ||
        job.location.toLowerCase().includes(filterText) ||
        job.type.toLowerCase().includes(filterText)
    );

    if(loader){
        return <Skeleton height={110}/>
    }

    return(
        <React.Fragment>
            <HeadContainer>
                <HeadText><h5>Job Title</h5></HeadText>
                <HeadText><h5>Location</h5></HeadText>
                <HeadText><h5>Job Type</h5></HeadText>
                <HeadText><h5> </h5></HeadText>
            </HeadContainer>
            {
                filteredJobs.map((data, index) => (
                    <Card key={`career-${index}`}>
                        <div>
                            <i className="fa-solid fa-briefcase"></i>
                            <h5>{data.title}</h5>                                                                   
                        </div>
                        <div>
                            <h5>{data.location}</h5>
                        </div>
                        <div>
                            <h5>{data.type}</h5>
                        </div>
                        <ViewButton>
                            <Link href={`/career/${data.slug}`} className="eva-btn eva-outline-danger">View</Link>
                        </ViewButton>
                    </Card>
                ))
            }
        </React.Fragment>
    )
}

const HeadContainer = styled.div`
    width: 100%;
    border: 9px;
    display: flex;
    justify-content: space-between;
    background-color: var(--main-color);
    color: #fff;
    margin-bottom: 2em;
` 

const HeadText = styled.div`
    width:100%;
    padding: 10px 30px;
    text-align: left;

    h5{
        font-weight: 400; 
    }
    @media screen and (max-width:767px){
        h5{
            font-size: 15px;
        }
    }
    @media screen and (max-width:496px){
        padding: 14px 20px;
        h5{
            font-size: 14px;
        }
    }
` 
const Card = styled.div`
    width: 100%;
    padding: 10px 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 1em 0;
    border: 1px solid #CEC9C9;
    border-radius: 5px;

    div{
        display: flex;
        align-items: center;
        width:100%;
        padding: 10px 30px;
    }
  
    div i {
        margin-right: .5em;
    }

    @media screen and (max-width:767px){
        div h5{
            font-size: 15px;
        }
    }
    @media screen and (max-width:496px){
        div{
            padding: 10px; 
        }
    }

    @media screen and (max-width:379px){
        div h5{
            font-size: 12px;
        }
    }
    
`
const ViewButton = styled.div`
    display: flex;
    align-items: center;
    width:100%;
    padding: 10px 30px;
    justify-content: center;

    @media screen and (max-width:379px){
        button{
            font-size:12px;
        }
    }
`