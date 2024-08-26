import { useRef } from "react";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";

const sanitizeInput = input => {
	const element = document.createElement("div");
	element.innerText = input;
	return element.innerHTML;
};

const Contact = () => {
	const form = useRef();

	const sendEmail = e => {
		e.preventDefault();

		const sanitizedData = {
			user_name: sanitizeInput(form.current.user_name.value),
			user_email: sanitizeInput(form.current.user_email.value),
			message: sanitizeInput(form.current.message.value),
		};

		emailjs
			.send(
				import.meta.env.VITE_EMAILJS_SERVICE_ID,
				import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
				{
					user_name: sanitizedData.user_name,
					user_email: sanitizedData.user_email,
					message: sanitizedData.message,
				},
				import.meta.env.VITE_EMAILJS_PUBLIC_KEY
			)
			.then(
				() => {
					Swal.fire({
						title: "Berhasil",
						text: "Pesan berhasil terkirim",
						icon: "success",
						timer: 3000,
					});
					form.current.reset(); 
				},
				error => {
					Swal.fire({
						title: "Gagal",
						text: "Pesan gagal terkirim",
						icon: "error",
						timer: 3000,
					});
					console.log(error);
				}
			);
	};

	return (
		<div
			id="contact"
			className="w-full h-auto px-10 py-8 flex flex-col justify-center items-center gap-5 bg-color-silver">
			<div className="w-full h-auto flex flex-col justify-start items-center">
				<span className="text-sm md:text-base font-light text-center text-color-black tracking-wider">
					SPICY AND TASTY
				</span>
				<h3 className="text-2xl md:text-4xl text-center font-bold text-color-black tracking-widest">
					DAFTAR MENU
				</h3>
				<p className="md:w-2/5 w-full text-sm md:text-base text-center font-light mt-2 text-color-black tracking-wider">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit
					maiores quidem sit recusandae iure. Reprehenderit itaque repellat
					officiis suscipit veritatis sapiente deleniti ea sint inventore
					quisquam delectus magni, vitae accusamus, nisi.
				</p>
			</div>
			<form
				className="w-full md:w-2/3 h-auto flex flex-col justify-start items-center gap-4"
				ref={form}
				onSubmit={sendEmail}>
				<div className="w-full h-auto flex flex-col justify-center items-start gap-3">
					<label
						htmlFor="title"
						className="text-base font-medium text-color-black">
						Nama Anda
					</label>
					<div className="w-full p-2 border-2 border-color-goldenRod rounded-md hover:border-color-lightGold2 focus-within:border-color-lightGold2">
						<input
							type="text"
							name="user_name"
							id="title"
							placeholder="Masukkan nama anda ..."
							className="w-full h-auto bg-transparent text-color-black placeholder:text-color-black tracking-wider outline-none border-none focus:outline-none focus:ring-0 focus:border-transparent"
							required
						/>
					</div>
				</div>
				<div className="w-full h-auto flex flex-col justify-center items-start gap-3">
					<label
						htmlFor="email"
						className="text-base font-medium text-color-black">
						Alamat Email
					</label>
					<div className="w-full p-2 border-2 border-color-goldenRod rounded-md hover:border-color-lightGold2 focus-within:border-color-lightGold2">
						<input
							type="email"
							name="user_email"
							id="email"
							placeholder="Masukkan alamat email ..."
							className="w-full h-auto bg-transparent text-color-black placeholder:text-color-black tracking-wider outline-none border-none focus:outline-none focus:ring-0 focus:border-transparent"
							required
						/>
					</div>
				</div>
				<div className="w-full h-auto flex flex-col justify-center items-start gap-3">
					<label
						htmlFor="message"
						className="text-base font-medium text-color-black">
						Pesan Anda
					</label>
					<div className="w-full p-2 border-2 border-color-goldenRod rounded-md hover:border-color-lightGold2 focus-within:border-color-lightGold2">
						<textarea
							id="message"
							name="message"
							rows="4"
							cols="60"
							placeholder="Masukkan pesan anda ..."
							className="w-full h-auto bg-transparent resize-none text-color-black placeholder:text-color-black tracking-wider outline-none border-none focus:outline-none focus:ring-0 focus:border-transparent"
							required
						/>
					</div>
				</div>
				<div className="w-full h-auto flex flex-col justify-center items-center">
					<input
						type="submit"
						value="Kirim"
						className="px-5 py-3 mt-5 text-base md:text-base font-normal text-color-white bg-color-black rounded-md tracking-widest hover:text-color-white hover:bg-color-goldenRod cursor-pointer shadow-md"
					/>
				</div>
			</form>
		</div>
	);
};

export default Contact;
