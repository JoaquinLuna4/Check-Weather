import React from "react";
import axios from "axios";
import { useForm } from "react-hook-form";

const URL =
	"https://api.openweathermap.org/data/2.5/weather?q=cordoba&appid=dcd20e9b46ed770b171e69f37ee13d57";
const FormHook = () => {
	
	
		const {
			register,
			handleSubmit,
			watch,
			formState: { errors },
		} = useForm();
		const onSubmit = (data) => {
			console.log(data);
		};
		
		return (
			<React.Fragment>
				<h1>Formu</h1>
				<form onSubmit={handleSubmit(onSubmit)}>
					<input {...register("City", { required: true })} />

					<button className="btn btn-primary"> Enviar</button>
				</form>
			</React.Fragment>
		);
	};
};
export default FormHook;
