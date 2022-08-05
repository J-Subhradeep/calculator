import React from "react";
import Button from "./Button";
let stylesofContainer = {
	display: "flex",
	alignItems: "center",
	justifyContent: "center",
	height: "100vh",
	contain: "content",
	borderRadius: "10px",
};

export default function Calc(props) {
	return (
		<>
			<div className="container" style={stylesofContainer}>
				<h1 className="hei">{props.heading}</h1>
				<div className="cal p-4">
					<div className="container" id="field"></div>

					<div className="rows">
						{props.arr.map((val, i) => (
							<Button value={val} key={i} cls={`num val${i}`} />
						))}
					</div>
				</div>
			</div>
		</>
	);
}
