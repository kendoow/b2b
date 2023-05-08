import { ChangeEventHandler, MouseEventHandler, useState, useCallback } from 'react';
import { towers } from '../../data/towers';
import { rooms } from '../../data/rooms';
import { floors } from '../../data/floors';
import Dropdown from '../../components/Dropdown/Dropdown';
import styles from './Form.module.scss';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Button } from '../../components/Button/Button';

const Form = () => {
	const [tower, setTower] = useState<string | null>(null);
	const [floor, setFloor] = useState<string | null>(null);
	const [room, setRoom] = useState<string | null>(null);
	const [startDate, setStartDate] = useState(new Date());
	const [comment, setComment] = useState<string>('');

	const commentChange: ChangeEventHandler<HTMLTextAreaElement> = (e) => {
		setComment(e.target.value);
	};

	const setDefaultValue = useCallback(() => {
		setStartDate(new Date());
		setTower(null);
		setFloor(null);
		setRoom(null);
		setComment('');
	}, []);

	const handleSubmit = useCallback<MouseEventHandler<HTMLFormElement>>((e) => {
		e.preventDefault();
		const JSONData = {
			tower,
			floor,
			room,
			startDate,
			comment
		};
		setDefaultValue();
		console.log(JSONData);
	}, [tower, floor, room, startDate, comment, setDefaultValue]);

	const disabled = !Boolean(floor && room && tower);

	return (
		<div className={styles.app}>
		<form className={styles.container} onSubmit={handleSubmit}>
			<Dropdown state={tower} setState={setTower} options={towers} onChange={useCallback((tower: string | null) => setTower(tower), [])} placeholder="Выбери башню" />
			<Dropdown state={floor} setState={setFloor} options={floors} onChange={useCallback((floor: string | null) => setFloor(floor), [])} placeholder="Выбери этаж" />
			<Dropdown state={room} setState={setRoom} options={rooms} onChange={useCallback((room: string | null) => setRoom(room), [])} placeholder="Выбери переговорную" />
			<DatePicker className={styles.datepicker} showTimeSelect selected={startDate} onChange={(date: any) => setStartDate(date)} />
			<textarea className={styles.textarea} placeholder='Оставь комментарий, если считаешь нужным' value={comment} onChange={commentChange} />
			<div className={styles.buttons}>
				<Button onClick={setDefaultValue}>Очистить </Button>
				<Button variant='secondary' disabled={disabled}>Отправить </Button>
			</div>
		</form>
		</div>

	);
};

export default Form;
