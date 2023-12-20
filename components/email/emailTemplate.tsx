/** @format */

import * as React from 'react';
import { IformData } from '@/components/about/contact';

export const EmailTemplate: React.FC<Readonly<IformData>> = (props) => (
    <div
        style={{
            display: 'flex',
            flexDirection: 'column',
        }}
    >
        <div style={{ fontSize: '1.25rem' }}>
            <span style={{ color: 'rgb(59 130 246)' }}>From, </span>
            {props.fName} {props.lName}
        </div>
        <div style={{ fontSize: '1.25rem', marginTop: '10px' }}>
            <span style={{ color: 'rgb(59 130 246)' }}>Email: </span>
            {props.email}
        </div>
        <div style={{ fontSize: '1.25rem', marginTop: '20px' }}>
            <span style={{ color: 'rgb(59 130 246)' }}>Message: </span> {props.message}
        </div>
    </div>
);
