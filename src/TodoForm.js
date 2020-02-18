import React, {useCallback, useState} from 'react';

const TodoForm = ({onInsert}) => {
    const [value, setValue] = useState('');
    const [value1, setValue1] = useState('');
    const onChange = useCallback((e) => {
        setValue(e.target.value);
    }, []);
    const onChange2 = useCallback((e) => {
        setValue1(e.target.value);
    }, []);
    const onSubmit = useCallback((e) => {
        onInsert(value);
        setValue('');
        e.preventDefault();
    }, [onInsert, value]);


    return (
        <form onSubmit={onSubmit}>
            <input placeholder="할 일을 입력하세요" value={value} onChange={onChange}/>
            <input placeholder="할 일을 입력하세요2" value={value1} onChange={onChange2}/>
            <button type="submit">등록</button>
        </form>
    );
};

export default TodoForm;
