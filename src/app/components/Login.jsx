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
				<div className='grid lg:grid-cols-2 place-items-center gap-3 grid-cols-1 bg-brand-darkGray mt-10 rounded-md'>
					<div className='flex items-center justify-center mx-3'>
						<Image
							src="/animation/login-animation.gif"
							className="max-w-[500px]:w-[200px] w-[200] max-w-[500px]:h-[200px] object-cover"
							width={350}
							height={350}
							objectFit='cover'
							loading='eager'
							alt='login-animation.gif' />
					</div>
					<div className="font-login w-[80%] ">
						<h3 className="text-[40px] text-white mb-5 mt-[30px]" >Welcome<span className='font-sym font-extrabold'>!</span></h3>

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
								// onClick={this.borderColor = "#b91c1c"}
								startAdornment={
									<InputAdornment position="start">
										<Typography className="text-brand-secondary border-e-2 font-semibold ms-1" variant="body1">
											+92&nbsp;&nbsp;
										</Typography>
									</InputAdornment>
								}
								className="text-brand-secondary border-b-[0.1rem] ps-[0.5rem] mt-3 border-white active:border-red-700 hover:border-black "
							/>
						</FormControl>

						<div className="mt-3"></div>

						<div>
							<button
								className={` text-white py-[10px] text-sm font-lgbtn px-4 rounded w-full m-auto mt-6 ${ number.length == 10 ? " bg-brand-inpred":" bg-brand-inpnot cursor-not-allowed" } `}
								type="button"
								disabled={number.length !== 10}
								>
								LOGIN
							</button>
						</div>

						<button className=" relative bg-brand-inpred font-lgbtn text-white text-sm py-3 px-4 rounded w-full mt-2 flex items-center justify-center" type="button">
							<FaGoogle className='absolute font-bold left-4 text-lg ' /> LOGIN WITH GOOGLE
						</button>
					</div>
				</div>
			</div>
		</>
	)
}

export default Login
