import styles from './App.module.scss';
import Form from './pages/Form/Form';
import vk from './assets/vk.svg';

function App() {
	return (
		<div className={styles.app}>
			<div className={styles.description}>
				<img width={50} height={50} src={vk} alt="vkicon" />
				<p className={styles.text}>тестовое b2b</p>
			</div>
			<Form />

		</div>
	);
}

export default App;
