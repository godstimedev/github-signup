import { useForm } from 'react-hook-form';
import { FaGithub } from 'react-icons/fa';
import { BsArrowRightShort } from 'react-icons/bs';
import { GiCheckMark } from 'react-icons/gi';
import Typed from 'react-typed';
import { useState } from 'react';

function App() {
	const [email, setEmail] = useState(false);
	const [password, setPassword] = useState(false);
	const [username, setUsername] = useState(false);
	const [product, setProduct] = useState(false);
	const [signedUp, setSignedUp] = useState(false);

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();

	const onSubmit = (data) => {
		console.log(data);

		if (data.email) {
			setPassword(true);
		}
		if (data.password) {
			setUsername(true);
		}
		if (data.username) {
			setProduct(true);
		}
		if (data.product) {
			setSignedUp(true);
		}
	};

	return (
		<div className="app">
			<nav>
				<div className="left">
					<FaGithub size={30} />
				</div>
				<div className="right">
					<p>Already have an account?</p>
					<a href="#">
						Sign in <BsArrowRightShort size={20} />
					</a>
				</div>
			</nav>
			{signedUp ? (
				<main>
					<div>
						<p className="success">Successfully signed up!!!</p>
					</div>
				</main>
			) : (
				<main>
					<div>
						<div className="form--message">
							<Typed
								strings={["Welcome to GitHub!<br> Let's begin the adventure "]}
								typeSpeed={50}
								onComplete={() => setEmail(true)}
								// loop
							/>
						</div>
						{email && (
							<form onSubmit={handleSubmit(onSubmit)}>
								<div className="form">
									<div>
										<label htmlFor="email">Enter your email</label>
										<div className="form--input">
											{password ? (
												<GiCheckMark size={20} className="icon-tick" />
											) : (
												<BsArrowRightShort size={20} className="icon" />
											)}
											<input
												title="Please fill out this field."
												type="email"
												name="email"
												{...register('email', {
													pattern: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
												})}
											/>
											{password ? <></> : <button className={errors.email ? '' : 'green'}>Continue</button>}
										</div>
									</div>

									{password && (
										<div>
											<label htmlFor="password">Enter your Password</label>
											<div className="form--input">
												{username ? (
													<GiCheckMark size={20} className="icon-tick" />
												) : (
													<BsArrowRightShort size={20} className="icon" />
												)}
												<input
													type="password"
													name="password"
													{...register('password', {
														required: 'Password is invalid',
														minLength: {
															value: 8,
															message:
																"Make sure it's at least 15 characters OR at least 8 characters including a number and a lowercase letter.",
														},
													})}
												/>
												{username ? (
													<></>
												) : (
													<button className={errors.password ? '' : 'green'}>Continue</button>
												)}
											</div>
										</div>
									)}

									{username && (
										<div>
											<label htmlFor="username">Enter your username</label>
											<div className="form--input">
												{product ? (
													<GiCheckMark size={20} className="icon-tick" />
												) : (
													<BsArrowRightShort size={20} className="icon" />
												)}
												<input
													title="Please fill out this field."
													type="text"
													name="username"
													{...register('username')}
												/>
												{product ? <></> : <button className={errors.username ? '' : 'green'}>Continue</button>}
											</div>
										</div>
									)}
									{product && (
										<div>
											<label htmlFor="username">
												Would you like to receive product updates and announcements via email? <br /> Type "y"
												for yes or "n" for no
											</label>
											<div className="form--input">
												<BsArrowRightShort size={20} className="icon" />
												<input
													title="Please fill out this field."
													type="text"
													name="product"
													{...register('product')}
												/>
												{<button className={errors.product ? '' : 'green'}>Continue</button>}
											</div>
										</div>
									)}
								</div>
							</form>
						)}
					</div>
					{errors.email && <p className="error--message">Email is invalid or already taken</p>}
					{errors.password && <p className="error--message">{errors.password.message}</p>}
					{errors.username && (
						<p className="error--message">
							Username may only contain alphanumeric characters or single hyphens, and cannot begin or end
							with a hyphen.
						</p>
					)}
				</main>
			)}
			{/* <footer>
				<div>
					By creating an account, you agree to the Terms of Service. For more information about GitHub's
					privacy practices, see the GitHub Privacy Statement. We'll occasionally send you
					account-related emails.
				</div>
			</footer> */}
		</div>
	);
}

export default App;
