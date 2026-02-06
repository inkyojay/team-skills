import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { ChatInterface } from '@/presentation/components/ChatInterface';
import { ChatMessage } from '@/domain/repositories/ISessionRepository';

describe('ChatInterface', () => {
    beforeAll(() => {
        window.HTMLElement.prototype.scrollIntoView = jest.fn();
    });

    it('renders chat input and submit button', () => {
        render(<ChatInterface onSendMessage={jest.fn()} messages={[]} isLoading={false} />);

        expect(screen.getByPlaceholderText('AI에게 무엇이든 물어보세요...')).toBeInTheDocument();
        expect(screen.getByRole('button', { name: '' })).toBeInTheDocument();
    });

    it('displays messages correctly', () => {
        const messages: ChatMessage[] = [
            { id: 'msg-1', role: 'user', content: 'Hello', timestamp: '2026-01-01T00:00:00Z' },
            { id: 'msg-2', role: 'assistant', content: 'Hi there!', timestamp: '2026-01-01T00:00:01Z' }
        ];
        render(<ChatInterface onSendMessage={jest.fn()} messages={messages} isLoading={false} />);

        expect(screen.getByText('Hello')).toBeInTheDocument();
        expect(screen.getByText('Hi there!')).toBeInTheDocument();
    });

    it('calls onSendMessage when form is submitted', () => {
        const handleSend = jest.fn();
        render(<ChatInterface onSendMessage={handleSend} messages={[]} isLoading={false} />);

        const input = screen.getByPlaceholderText('AI에게 무엇이든 물어보세요...');
        fireEvent.change(input, { target: { value: 'Make a page' } });
        fireEvent.submit(input.closest('form')!);

        expect(handleSend).toHaveBeenCalledWith('Make a page');
    });

    it('disables input when loading', () => {
        render(<ChatInterface onSendMessage={jest.fn()} messages={[]} isLoading={true} />);

        expect(screen.getByPlaceholderText('AI에게 무엇이든 물어보세요...')).toBeDisabled();
    });
});
