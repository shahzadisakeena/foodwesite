"use client"
import Image from 'next/image'
import React from 'react'
import { FilledInput, FormControl, InputLabel, Typography, InputAdornment } from "@mui/material";
import { useState } from 'react';
import { FaGoogle } from "react-icons/fa";


const Login = () => {
	const [number, setNumber] = useState('');

	return (
		<>
			<div className='h-full w-[70vw] mx-auto'>
				<h2 className='text-3xl text-brand-secondary font-bold lg:mt-[10.5rem] mt-[11.5rem]'></h2>
				<div className='grid lg:grid-cols-2 place-items-center gap-3 grid-cols-1 pb-4 bg-brand-darkGray mt-10 rounded-md'>
					<div className='flex items-center justify-center mx-5'>
						<Image
							src="/animation/login-animation.gif"
							className="max-w-[500px]:w-[200px] w-[200] max-w-[500px]:h-[200px] object-cover"
							width={350}
							height={350}
							objectFit='cover'
							loading='eager'
							alt='login-animation.gif' />
					</div>
					<div className="font-ftr w-4/5 ">
						<h3 className="text-[40px] text-white font-extrabold mb-4" >Welcome!</h3>

						<FormControl variant="filled" error fullWidth className="bg-brand-lgInp rounded-t-lg">
							<InputLabel className="!text-brand-secondary" shrink htmlFor="outlined-number">
								Phone Number (3XXXXXXXXX)
							</InputLabel>
							<FilledInput
								id="outlined-number"
								name="input1"
								type="tel"
								autoComplete="mobile tel"
								value={number}
								disableUnderline
								onChange={(e) => {
									const inputValue = e.target.value; // Remove non-numeric characters
									if (!isNaN(inputValue) && inputValue.startsWith("3") && inputValue.length <= 10) {
										setNumber(inputValue);
									}else if(!isNaN(inputValue) && inputValue == 3){
										setNumber(inputValue);
									}
								}}
								startAdornment={
									<InputAdornment position="start">
										<Typography className="text-brand-secondary border-e-2 font-semibold ms-1" variant="body1">
											+92&nbsp;&nbsp;
										</Typography>
									</InputAdornment>
								}
								className="text-brand-secondary border-b-[0.1rem] ps-[0.5rem] mt-3 border-white focus:border-red-700 hover:border-black "
							/>
						</FormControl>

						<div className="mt-3"></div>

						<div>
							<button
								className={` text-white py-3 text-sm font-bold px-4 rounded w-full mt-4 ${ number.length == 10 ? "opacity-100 bg-brand-inpred":"opacity-50 bg-brand-inpnot cursor-not-allowed" } `}
								type="button"
								disabled={number.length !== 10}
								>
								LOGIN
							</button>
						</div>

						<button className=" relative bg-brand-inpred text-white text-sm py-3 px-4 rounded w-full mt-2 flex items-center justify-center font-bold" type="button">
							<FaGoogle className='absolute left-4 text-lg ' /> LOGIN WITH GOOGLE
						</button>
					</div>
				</div>
			</div>
		</>
	)
}

export default Login
