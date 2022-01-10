import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Date from "./date";

const FormHook = () => {
	const [dataso, setDataso] = useState([]);

	const {
		register,
		handleSubmit,
		watch,
		formState: { errors },
	} = useForm();
	const onSubmit = (data) => {
		console.log(data);
		setDataso([...dataso, data]);
		// console.log(dataso[1].City);
	};

	return (
		<React.Fragment>
			<h1 className="whitecolor">Formu</h1>
			<form onSubmit={handleSubmit(onSubmit)}>
				<input {...register("City", { required: true })} />

				<button className="btn btn-primary"> Enviar</button>
			</form>
			<Date today="Fri, 5 Jun" dataso={dataso[1].City} />

			{/* <ul className="whitecolor">
				{dataso.map((item) => (
					<li key={item.City}>{item.City}</li>
				))}
			</ul> */}
		</React.Fragment>
	);
};

export default FormHook;
