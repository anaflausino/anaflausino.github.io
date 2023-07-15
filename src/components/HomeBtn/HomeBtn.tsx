import React, { ReactComponentElement } from "react";
import "./HomeBtn.css";

interface HomeBtnProps {
    title: string;
    page: string;
}

function HomeBtn(props: HomeBtnProps) {
    const title: string = props.title;
    // const page = props.page;

    return <button>{title}</button>;
}

export default HomeBtn;
