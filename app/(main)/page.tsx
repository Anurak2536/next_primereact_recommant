'use client';
import React, { useContext, useEffect, useRef, useState } from 'react';
import { Button } from 'primereact/button';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Dialog } from 'primereact/dialog';
import { InputText } from 'primereact/inputtext';
import { Dropdown } from 'primereact/dropdown';
import Link from 'next/link';



const Dashboard = () => {
    const [products, setProducts] = useState([
        { on: 1, detail: 'Document Approval', faculty: 'Engineering', status: '1' },
        { on: 2, detail: 'Meeting Request', faculty: 'Business', status: '0' },
        { on: 3, detail: 'Course Registration', faculty: 'IT', status: '0' },
    ]);

    const faculties = [
        { label: 'Engineering', value: 'Engineering' },
        { label: 'Business', value: 'Business' },
        { label: 'IT', value: 'IT' },
        { label: 'Science', value: 'Science' },
    ];

    const statusTemplate = (rowData: any) => {
        const statusStyle = [
            {
                backgroundColor: '#F44336',
                color: '#ffffff',
                fontSize: '0.95rem',
                borderRadius: '8px',
                padding: '0.25rem 0.4rem',
            },
            {
                backgroundColor: '#009688',
                color: '#ffffff',
                fontSize: '0.95rem',
                borderRadius: '8px',
                padding: '0.25rem 0.4rem',
            },
        ];

        const statusText = [
            'รอดำเนินการ',
            'ดำเนินการเสร็จสิ้น',
        ];

        return (
            <span style={statusStyle[rowData.status]}>
                {statusText[rowData.status]}
            </span>
        );
    };

    const [showDialog, setShowDialog] = useState(false);
    const [newEntry, setNewEntry] = useState({
        on: '',
        detail: '',
        faculty: '',
        status: '0',
    });

    const handleAddEntry = () => {
        setProducts((prevProducts) => [
            ...prevProducts,
            { ...newEntry, on: prevProducts.length + 1 },
        ]);
        setShowDialog(false);
        setNewEntry({ on: '', detail: '', faculty: '', status: '0' });
    };

    return (
        <div className="grid">
            <div className="col-12">
                <div className="card">
                    <h3 className="flex align-items-center">
                        <i className="pi pi-bell mr-2" style={{ fontSize: '1.5rem' }}></i>
                        แจ้งปัญหาและข้อเสนอแนะ
                    </h3>
                    <DataTable value={products} rows={5} paginator responsiveLayout="scroll">
                        <Column field="on" header="ลำดับ" sortable style={{ width: '10%' }} />
                        <Column field="detail" header="รายการ" sortable style={{ width: '50%' }} />
                        <Column field="faculty" header="คณะ - หน่วยงาน" sortable style={{ width: '25%' }} />
                        <Column
                            field="status"
                            header="สถานะ"
                            sortable
                            style={{ width: '15%' }}
                            body={statusTemplate}
                        />
                    </DataTable>
                </div>
            </div>

            <Dialog
                header="เพิ่มแจ้งปัญหาและข้อเสนอแนะ"
                visible={showDialog}
                style={{ width: '40vw' }}
                onHide={() => setShowDialog(false)}
            >
                <div className="p-fluid formgrid grid">
                    <div className="field col-12">
                        <label htmlFor="detail">รายการ</label>
                        <InputText
                            id="detail"
                            value={newEntry.detail}
                            onChange={(e) => setNewEntry({ ...newEntry, detail: e.target.value })}
                        />
                    </div>
                    <div className="field col-12">
                        <label htmlFor="faculty">คณะ - หน่วยงาน</label>
                        <Dropdown
                            id="faculty"
                            value={newEntry.faculty}
                            options={faculties}
                            onChange={(e) => setNewEntry({ ...newEntry, faculty: e.value })}
                            placeholder="เลือกคณะ/หน่วยงาน"
                        />
                    </div>
                    <div className="col-12 text-right">
                        <Button
                            label="เพิ่ม"
                            icon="pi pi-check"
                            onClick={handleAddEntry}
                            className="mt-2"
                        />
                    </div>
                </div>
            </Dialog>
        </div>
    );
};

export default Dashboard;
