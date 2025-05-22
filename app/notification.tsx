import React from 'react';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useState } from 'react';
import { useRef } from 'react';
import { useMemo } from 'react';
import { useCallback } from 'react';
import { useContext } from 'react';
import { useReducer } from 'react';
import { useLayoutEffect } from 'react';
import { useImperativeHandle } from 'react';
import { useDebugValue } from 'react';
import { useTransition } from 'react';
import { useDeferredValue } from 'react'; 


const App = () => {
  const links = [
    { label: 'notice', url: 'https://strata-management-site-sage.vercel.app/notification' },
    { label: 'document', url: 'https://strata-management-site-sage.vercel.app/document' },
    { label: 'about-us', url: 'https://strata-management-site-sage.vercel.app/about-us' },
    { label: 'contact-us', url: 'https://strata-management-site-sage.vercel.app/contact-us' },
  ];

  return (
    <div style={{ padding: '40px', fontFamily: 'Arial, sans-serif' }}>
      {/* 按钮区域 */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '10px',
        }}
      >
        {links.map((item, index) => (
          <a
            key={index}
            href={item.url}
            style={{
              flex: '1 1 22%',
              minWidth: '120px',
              textAlign: 'center',
              padding: '12px 20px',
              backgroundColor: '#007BFF',
              color: 'white',
              textDecoration: 'none',
              borderRadius: '6px',
              fontSize: '1rem',
              transition: 'background-color 0.3s',
            }}
            onMouseOver={e => (e.currentTarget.style.backgroundColor = '#339DFF')}
            onMouseOut={e => (e.currentTarget.style.backgroundColor = '#007BFF')}
          >
            {item.label}
          </a>
        ))}
      </div>

      {/* 文本区域 */}
      <div style={{ marginTop: '60px', textAlign: 'center', fontSize: '1.2rem' }}>
        blablablablabla
      </div>
    </div>
  );
};

export default App;
