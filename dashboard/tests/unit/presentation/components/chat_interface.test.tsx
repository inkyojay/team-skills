import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { ChatInterface } from '@/presentation/components/ChatInterface';

describe('ChatInterface', () => {
    beforeAll(() => {
        window.HTMLElement.prototype.scrollIntoView = jest.fn();
    });
    it('renders chat input and send button', () => {
        render(<ChatInterface onSendMessage={jest.fn()} messages={[]} isLoading={false} />);

        expect(screen.getByPlaceholderText('Type your request...')).toBeInTheDocument();
        expect(screen.getByRole('button', { name: /send/i })).toBeInTheDocument();
    });

    it('displays messages correctly', () => {
        const messages = [
            { role: 'user', content: 'Hello' },
            { role: 'assistant', content: 'Hi there!' }
        ];
        render(<ChatInterface onSendMessage={jest.fn()} messages={messages} isLoading={false} />);

        expect(screen.getByText('Hello')).toBeInTheDocument();
        expect(screen.getByText('Hi there!')).toBeInTheDocument();
    });

    it('calls onSendMessage when form is submitted', () => {
        const handleSend = jest.fn();
        render(<ChatInterface onSendMessage={handleSend} messages={[]} isLoading={false} />);

        const input = screen.getByPlaceholderText('Type your request...');
        fireEvent.change(input, { target: { value: 'Make a page' } });
        fireEvent.click(screen.getByRole('button', { name: /send/i }));

        expect(handleSend).toHaveBeenCalledWith('Make a page');
    });

    it('disables input when loading', () => {
        render(<ChatInterface onSendMessage={jest.fn()} messages={[]} isLoading={true} />);

        expect(screen.getByPlaceholderText('Type your request...')).toBeDisabled();
        expect(screen.getByRole('button', { name: /send/i })).toBeDisabled();
    });
});
