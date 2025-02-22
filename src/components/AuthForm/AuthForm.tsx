import styles from './AuthForm.module.css'

interface AuthModal {
	onClose: () => void
}

export default function AuthForm({ onClose }: AuthModal) {
	const handleCloseAuth = (e: React.MouseEvent<HTMLButtonElement>) => {
		e.preventDefault()
		onClose()
	}

	return (
		<div className={styles.auth_box}>
			<div className={styles.title_btn_box}>
				<p className={styles.title_auth}>Авторизация</p>
				<button onClick={handleCloseAuth} className={styles.btn_close_modal}>
					<img src='/src/images/close_modal.svg' alt='close_modal' />
				</button>
			</div>
			<form className={styles.form_auth}>
				<div className={styles.input_box}>
					<label className={styles.label_auth} htmlFor='email'>
						E-Mail
					</label>
					<input
						id='email'
						className={styles.input_auth}
						type='text'
						placeholder='Ваш E-Mail'
					/>
				</div>
				<div className={styles.input_box}>
					<label className={styles.label_auth} htmlFor='password'>
						Пароль
					</label>
					<input
						id='password'
						className={styles.input_auth}
						type='password'
						placeholder='Ваш пароль'
					/>
				</div>
				<button className={styles.btn_send_form_auth}>Войти</button>
			</form>
		</div>
	)
}
