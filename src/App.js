import { useForm } from 'react-hook-form';
import { FaGithub } from 'react-icons/fa';
import { BsArrowRightShort } from 'react-icons/bs';
import Typed from 'react-typed';
import { useState } from 'react';

function App() {
	const [email, setEmail] = useState(false);
	const [password, setPassword] = useState(false);
	const [username, setUsername] = useState(false);

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
	};

	// const Header = () => {
	// 	return (

	// 	);
	// };
	// let str = 'Welcome to GitHub!' + '\r\n' + "Let's begin the adventure ";

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
			<main>
				<div>
					<div className="form--message">
						<Typed
							strings={["Welcome to GitHub!<br> Let's begin the adventure "]}
							typeSpeed={50}
							// loop
						/>
					</div>
					<form onSubmit={handleSubmit(onSubmit)}>
						<div className="form">
							{email && (
								<div>
									<label htmlFor="email">Enter your email</label>
									<div className="form--input">
										<BsArrowRightShort size={20} className="icon" />
										<input
											title="Please fill out this field."
											type="email"
											name="email"
											{...register('email', {
												pattern: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
											})}
										/>
										<button>Continue</button>
									</div>
								</div>
							)}

							{password && (
								<div>
									<label htmlFor="password">Enter your Password</label>
									<div className="form--input">
										<BsArrowRightShort size={20} className="icon" />
										<input
											type="password"
											name="password"
											{...register('password', {
												required: 'Password is invalid',
												minLength: { value: 8, message: 'Too weak' },
											})}
										/>
										<button>Continue</button>
									</div>
								</div>
							)}

							{username && (
								<div>
									<label htmlFor="username">Enter your username</label>
									<div className="form--input">
										<BsArrowRightShort size={20} className="icon" />
										<input
											title="Please fill out this field."
											type="text"
											name="username"
											{...register('username')}
										/>
										<button>Continue</button>
									</div>
								</div>
							)}
						</div>
					</form>
				</div>
				{errors.email && <p className="error--message">Email is invalid or already taken</p>}
				{errors.password && <p className="error--message">{errors.password.message}</p>}
			</main>
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
