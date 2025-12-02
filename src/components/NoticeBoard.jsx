import React from 'react';
import './NoticeBoard.css';

const NoticeBoard = () => {
    const notices = [
        {
            id: 1,
            title: 'We are Hiring!',
            date: '2025-12-01',
            content: 'Looking for Senior React Developers.',
            link: '/careers/apply?job=Senior React Developer',
            linkText: 'Apply Now'
        },
        {
            id: 2,
            title: 'We are Hiring!',
            date: '2025-12-01',
            content: 'Looking for Frontend React Developers.',
            link: '/careers/apply?job=Frontend React Developer',
            linkText: 'Apply Now'
        },
        {
            id: 3,
            title: 'New Office Opening',
            date: '2025-11-28',
            content: 'We are expanding to a new location in Tech City.'
        },
        {
            id: 4,
            title: 'System Maintenance',
            date: '2025-11-25',
            content: 'Scheduled maintenance on Dec 5th, 2:00 AM - 4:00 AM.'
        }
    ];

    return (
        <div className="notice-board glass">
            <div className="notice-header">
                <h3> Notice Board</h3>
                <span className="live-badge">LIVE</span>
            </div>
            <div className="notice-list">
                {notices.map(notice => (
                    <div key={notice.id} className="notice-item">
                        <div className="notice-top">
                            {/* <span className="notice-date">{notice.date}</span> */}
                        </div>
                        <h4>{notice.title} {notice.id !== 2 && notice.id !== 4 && <span className="new-badge">New</span>}</h4>
                        <p>{notice.content}</p>
                        {notice.link && (
                            <a href={notice.link} className="notice-link">{notice.linkText} &rarr;</a>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default NoticeBoard;
