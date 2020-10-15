import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import { Home } from "./tibi.js";
//create your first component
export function Home() {
	return (
		<div className="wrapper">
			<div className="media d-flex align-items-center">
				<img
					src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRCD2m69JVd-H3Fc32XFk0fllS42gsl30YrSw&usqp=CAU"
					class="mr-3 rounded-circle"
					alt="..."
				/>
				<div className="media-body">
					<h1 className="mt-0">Tibisay Vielma Toro</h1>
					<div className="icons d-flex flex-column py-2">
						<i className="fab fa-linkedin mb-0">
							in/tibisay-vielma-toro
						</i>
						<i className="fab fa-github mb-0">Tibisfly</i>
						<i className="fas fa-envelope mb-0">
							vielmatorotibisay@gmail.com
						</i>
						<i class="fab fa-whatsapp mb-0">+(34)625 87 29 62</i>
					</div>
				</div>
			</div>

			<div className="container">
				<div className="row">
					<div className="col-6">
						<h3 className="text-left py-5">Experience</h3>
					</div>
					<div className="col-6 py-5">
						<p>
							<strong>Administrative Assistant </strong>
							at OliverAlcazar Madrid
						</p>
						<p>
							<strong>From:</strong>
							2017 - <strong>To: </strong>
							2020
						</p>
						<p>
							<strong>Orthodontist Assistant</strong> at QR El
							Recreo Caracas
						</p>
						<p>
							<strong>From:</strong>
							2012 - <strong>To: </strong>
							2014
						</p>
						<p>
							<strong>Resident Dentist</strong> at Odontología
							Familiar C.A.
						</p>
						<p>
							<strong>From:</strong>
							2015 - <strong>To: </strong>
							2017
						</p>
						<p>
							<strong>Dental Medicine</strong>
							at Universidad Central de Venezuela
						</p>
						<p>
							<strong>From:</strong>
							2009 - <strong>To: </strong>
							2016
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}
