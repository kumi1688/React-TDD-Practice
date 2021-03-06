import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import TodoForm from './TodoForm';

describe('<TodoForm />', () => {
    it('has input and a button', () => {
        const { getByText, getByPlaceholderText } = render(<TodoForm />);
        getByPlaceholderText('할 일을 입력하세요'); // input 이 있는지 확인
        getByText('등록'); // button이 있는지 확인
    });

    it('changes input', () => {
        const { getByPlaceholderText } = render(<TodoForm />);
        const input = getByPlaceholderText('할 일을 입력하세요');
        fireEvent.change(input, {
            target: {
                value: 'TDD 배우기'
            }
        });
        expect(input).toHaveAttribute('value', 'TDD 배우기');
    });

    it('changes input2', () => {
        const {getByPlaceholderText} = render(<TodoForm/>);
        const input = getByPlaceholderText('할 일을 입력하세요2');
        fireEvent.change(input, {
            target: {
                value: '야호'
            }
        });
        expect(input).toHaveAttribute('value', '야호');
    });

    it('calls on Insert and clears input', () => {
        const onInsert = jest.fn();
        const {getByText, getByPlaceholderText} = render(<TodoForm onInsert={onInsert}/>);

        const input = getByPlaceholderText('할 일을 입력하세요');
        const button = getByText('등록');

        fireEvent.change(input, {
            target: {
                value: 'TDD 배우기'
            }
        });

        fireEvent.click(button);
        expect(onInsert).toBeCalledWith('TDD 배우기');
        expect(input).toHaveAttribute('value', '');


    })



});
