import React, { useState } from 'react';
import '../styles/index.js';
import '../styles/java/scripts.js';
import '../styles/index.css';

const TrippelnResults = () => {
    const [selectedYear, setSelectedYear] = useState('all');
    const [selectedGender, setSelectedGender] = useState('all');

    const years = [2023, 2022, 2021, 2020, 2019, 2018];
    const categories = ['Herrar', 'Damer', 'Mixed'];

    const filterLinks = (year, category) => {
        if (selectedYear !== 'all' && year !== parseInt(selectedYear)) return false;
        if (selectedGender !== 'all' && category !== selectedGender) return false;
        return true;
    };

    return (
        <div className="MaxWH location">
            <div className="set-03" style={{ height: '120px' }}></div>
            <section className="page_01 dynamic-background flex flex_col flex_j_E set-03">
                <div className="trans-background page_01box flex flex_col flex_j_SA">
                    <p className="font_blue fonts_huge">RESULTAT</p>
                </div>
            </section>

            <section className="set-03" style={{ minHeight: '130vh', padding: '2rem' }}>
                <div className="trans-background" style={{ padding: '2rem', borderRadius: '8px' }}>
                    <div style={{ marginBottom: '2rem' }} className="flex flex_j_C flex_a_C">
                        <select 
                            value={selectedYear} 
                            onChange={(e) => setSelectedYear(e.target.value)}
                            style={{ padding: '0.5rem 1rem', margin: '0 1rem', background: 'rgba(0, 0, 0, 0.8)', color: '#00a6fb', border: '2px solid #00a6fb', borderRadius: '4px' }}
                        >
                            <option style={{ background: 'rgba(0, 0, 0, 0.8)', color: '#00a6fb' }} value="all">Alla År</option>
                            {years.map(year => (
                                <option style={{ background: 'rgba(0, 0, 0, 0.8)', color: '#00a6fb' }} key={year} value={year}>{year}</option>
                            ))}
                        </select>

                        <select 
                            value={selectedGender} 
                            onChange={(e) => setSelectedGender(e.target.value)}
                            style={{ padding: '0.5rem 1rem', margin: '0 1rem', background: 'rgba(0, 0, 0, 0.8)', color: '#00a6fb', border: '2px solid #00a6fb', borderRadius: '4px' }}
                        >
                            <option style={{ background: 'rgba(0, 0, 0, 0.8)', color: '#00a6fb' }} value="all">Alla Kategorier</option>
                            <option style={{ background: 'rgba(0, 0, 0, 0.8)', color: '#00a6fb' }} value="Herrar">Herrar</option>
                            <option style={{ background: 'rgba(0, 0, 0, 0.8)', color: '#00a6fb' }} value="Damer">Damer</option>
                            <option style={{ background: 'rgba(0, 0, 0, 0.8)', color: '#00a6fb' }} value="Mixed">Mixed</option>
                        </select>
                    </div>

                    <div className="flex" style={{ gap: '2rem' }}>
                        <div style={{ flex: 1, padding: '2rem', margin: '0 1rem', backgroundColor: 'rgba(0, 166, 251, 0.1)', borderRadius: '8px', border: '1px solid rgba(0, 166, 251, 0.3)' }}>
                            <h2 className="font_blue fonts_medium" style={{ textAlign: 'center', marginBottom: '2rem', paddingBottom: '1rem', borderBottom: '2px solid #00a6fb' }}>
                                ULRICEHAMN
                            </h2>
                            {years.map(year => (
                                categories.map(category => (
                                    filterLinks(year, category) && (
                                        <a key={`ulricehamn-${year}-${category}`} href="#" style={{ display: 'block', padding: '0.5rem', textDecoration: 'none', marginBottom: '0.5rem', color: '#00a6fb', transition: 'all 0.3s' }}>
                                            {category} {year}
                                        </a>
                                    )
                                ))
                            ))}
                        </div>

                        <div style={{ flex: 1, padding: '2rem', margin: '0 1rem', backgroundColor: 'rgba(0, 166, 251, 0.1)', borderRadius: '8px', border: '1px solid rgba(0, 166, 251, 0.3)' }}>
                            <h2 className="font_blue fonts_medium" style={{ textAlign: 'center', marginBottom: '2rem', paddingBottom: '1rem', borderBottom: '2px solid #00a6fb' }}>
                                SÄLEN
                            </h2>
                            {years.map(year => (
                                categories.map(category => (
                                    filterLinks(year, category) && (
                                        <a key={`salen-${year}-${category}`} href="#" style={{ display: 'block', padding: '0.5rem', textDecoration: 'none', marginBottom: '0.5rem', color: '#00a6fb', transition: 'all 0.3s' }}>
                                            {category} {year}
                                        </a>
                                    )
                                ))
                            ))}
                        </div>

                        <div style={{ flex: 1, padding: '2rem', margin: '0 1rem', backgroundColor: 'rgba(0, 166, 251, 0.1)', borderRadius: '8px', border: '1px solid rgba(0, 166, 251, 0.3)' }}>
                            <h2 className="font_blue fonts_medium" style={{ textAlign: 'center', marginBottom: '2rem', paddingBottom: '1rem', borderBottom: '2px solid #00a6fb' }}>
                                HEMSEDAL
                            </h2>
                            {years.map(year => (
                                categories.map(category => (
                                    filterLinks(year, category) && (
                                        <a key={`hemsedal-${year}-${category}`} href="#" style={{ display: 'block', padding: '0.5rem', textDecoration: 'none', marginBottom: '0.5rem', color: '#00a6fb', transition: 'all 0.3s' }}>
                                            {category} {year}
                                        </a>
                                    )
                                ))
                            ))}
                        </div>

                        <div style={{ flex: 1, padding: '2rem', margin: '0 1rem', backgroundColor: 'rgba(0, 166, 251, 0.1)', borderRadius: '8px', border: '1px solid rgba(0, 166, 251, 0.3)' }}>
                            <h2 className="font_blue fonts_medium" style={{ textAlign: 'center', marginBottom: '2rem', paddingBottom: '1rem', borderBottom: '2px solid #00a6fb' }}>
                                KOLMÅRDEN
                            </h2>
                            {years.map(year => (
                                categories.map(category => (
                                    filterLinks(year, category) && (
                                        <a key={`kolmarden-${year}-${category}`} href="#" style={{ display: 'block', padding: '0.5rem', textDecoration: 'none', marginBottom: '0.5rem', color: '#00a6fb', transition: 'all 0.3s' }}>
                                            {category} {year}
                                        </a>
                                    )
                                ))
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default TrippelnResults;