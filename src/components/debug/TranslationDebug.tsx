import { useTranslation } from "react-i18next";

const TranslationDebug = () => {
  const { t } = useTranslation();
  
  const description1 = t('hero.description1');
  const description2 = t('hero.description2');
  
  return (
    <div style={{
      position: 'fixed',
      bottom: '10px',
      left: '10px',
      background: 'white',
      border: '2px solid black',
      padding: '20px',
      maxWidth: '500px',
      zIndex: 9999,
      fontSize: '14px'
    }}>
      <h3>Translation Debug</h3>
      <div style={{ marginTop: '10px' }}>
        <strong>Raw description1:</strong>
        <pre style={{ background: '#f0f0f0', padding: '10px', overflow: 'auto' }}>
          {description1}
        </pre>
      </div>
      <div style={{ marginTop: '10px' }}>
        <strong>Raw description2:</strong>
        <pre style={{ background: '#f0f0f0', padding: '10px', overflow: 'auto' }}>
          {description2}
        </pre>
      </div>
      <div style={{ marginTop: '10px' }}>
        <strong>Rendered description1:</strong>
        <div 
          style={{ background: '#e0e0e0', padding: '10px' }}
          dangerouslySetInnerHTML={{ __html: description1 }}
        />
      </div>
      <div style={{ marginTop: '10px' }}>
        <strong>Rendered description2:</strong>
        <div 
          style={{ background: '#e0e0e0', padding: '10px' }}
          dangerouslySetInnerHTML={{ __html: description2 }}
        />
      </div>
    </div>
  );
};

export default TranslationDebug;