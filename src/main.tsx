import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './app';

const appRoot = document.getElementById('root')!;

createRoot(appRoot).render(
	<StrictMode>
		<App />
	</StrictMode>,
);
