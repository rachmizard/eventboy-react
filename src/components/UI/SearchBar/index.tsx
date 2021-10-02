import { Button, Divider } from "components";
import { FORMAT_DATE } from "constant";
import moment from "moment";
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
    const [defaultDate, setDefaultValue] = useState<Date>(new Date());

    function onToggleCalendarHandler() {
        setToggleCalendar((prev) => !prev);
    }

    function onChangeCalendar(cb: any) {
        const setDate = new Date(cb);
        setDefaultValue(setDate);

        const setFormatted = moment(setDate).format(FORMAT_DATE);

        setToggleCalendar(false);
        setValue(setFormatted);
    }

    return (
        <SearchBarWrapper>
            <InputTextSearch style={{ flex: 2 }}>
                <IoIosSearch size={24} />
                <InputText
                    type="search"
                    autoFocus
                    placeholder="Search Events ..."
                />
            </InputTextSearch>
            <Divider position="vertical" dividerSize={1} />
            <InputTextSearch style={{ position: "relative" }}>
                <IoIosCalendar
                    size={24}
                    onClick={onToggleCalendarHandler}
                    cursor="pointer"
                />
                <InputText
                    type="text"
                    value={value}
                    placeholder="Date"
                    readOnly
                />
                {toggleCalendar && (
                    <div style={{ position: "absolute", top: 45 }}>
                        <Calendar
                            value={defaultDate}
                            onChange={onChangeCalendar}
                        />
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
