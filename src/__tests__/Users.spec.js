import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from "react-dom/test-utils";
import Users from '../Users';

let container;

beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
});

afterEach(() => {
    unmountComponentAtNode(container);
    container.remove();
    container = null;
});

/**
 * Mocking Fetch API call with Jest
 */
describe('User Component', () => {
    test('it shows a list of users ', async() => {
        const fakeResponse = [
            { name: "name1 ", email: "email@0101", phone: "010-010-0101 "}, 
            { name: "name2", email: "email@0202", phone: "020-020-0202"}
        ];

        jest.spyOn(window, "fetch").mockImplementation(() => {
            const fetchResponse = {
                json: () => Promise.resolve(fakeResponse)
            }
            return Promise.resolve(fetchResponse);
        })
        
        await act( async() => {
            render(<Users />, container)
        });

        expect(container.textContent).toBe('name1  | email@0101 | 010-010-0101 name2 | email@0202 | 020-020-0202');
        window.fetch.mockRestore();
    })
});