import { useHistory } from 'react-router-dom';

export default function NotFound(props: { message?: string }) {
    const history = useHistory();
    return (
        <div style={{ width: '100vw', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            {props.message || `Route not found ${history.location.pathname}`}
        </div>
    );
}
