import { Button, Divider } from "components";
import { LOCALE_DATE } from "constant";
import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { IoIosCalendar, IoIosSearch, IoMdMap } from "react-icons/io";
import {
	InputText,
	InputTextSearch,
	SearchBarWrapper,
} from "./SearchBar.style";

const SearchBar: React.FC = () => {
	const [toggleCalendar, setToggleCalendar] = useState<boolean>(false);
	const [value, setValue] = useState<string>("");

	function onToggleCalendarHandler() {
		setToggleCalendar((prev) => !prev);
	}

	function onChangeCalendar(cb: any) {
		const setDate = new Date(cb);
		const formatOverrided = setDate.toLocaleDateString(LOCALE_DATE, {
			year: "numeric",
			month: "2-digit",
			day: "2-digit",
		});

		setToggleCalendar(false);
		setValue(formatOverrided);
	}

	return (
		<SearchBarWrapper>
			<InputTextSearch style={{ flex: 2 }}>
				<IoIosSearch size={24} />
				<InputText type="search" autoFocus placeholder="Search Events ..." />
			</InputTextSearch>
			<Divider position="vertical" dividerSize={1} />
			<InputTextSearch style={{ position: "relative" }}>
				<IoIosCalendar
					size={24}
					onClick={onToggleCalendarHandler}
					cursor="pointer"
				/>
				<InputText type="text" value={value} placeholder="Date" readOnly />
				{toggleCalendar && (
					<div style={{ position: "absolute", top: 45 }}>
						<Calendar onChange={onChangeCalendar} />
					</div>
				)}
			</InputTextSearch>
			<Divider position="vertical" dividerSize={1} />
			<InputTextSearch>
				<IoMdMap size={24} />
				<InputText type="text" placeholder="Location" />
			</InputTextSearch>
			<Button variant="primary" buttonSize="md">
				Search
			</Button>
		</SearchBarWrapper>
	);
};

export default SearchBar;
