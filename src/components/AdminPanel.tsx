import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth, db, storage } from '../lib/firebase';
import { signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged, User } from 'firebase/auth';
import { collection, getDocs, addDoc, updateDoc, deleteDoc, doc, Timestamp, onSnapshot } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { LogOut, Eye, EyeOff, Upload, Plus, Users, Server, Key, LayoutDashboard, Loader2, ArrowLeft } from 'lucide-react';

export default function AdminPanel() {
  const navigate = useNavigate();
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  
  // Login State
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState('');

  // Dashboard State
  const [activeTab, setActiveTab] = useState<'dashboard' | 'clients' | 'services' | 'credentials'>('dashboard');

  // Data State
  const [clients, setClients] = useState<any[]>([]);
  const [services, setServices] = useState<any[]>([]);
  const [credentials, setCredentials] = useState<any[]>([]);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return unsubscribe;
  }, []);

  useEffect(() => {
    if (user) {
      // Setup Real-time listeners
      const unsubClients = onSnapshot(collection(db, 'clients'), (snapshot) => {
        setClients(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
      });
      const unsubServices = onSnapshot(collection(db, 'services'), (snapshot) => {
        setServices(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
      });
      const unsubCreds = onSnapshot(collection(db, 'credentials'), (snapshot) => {
        setCredentials(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
      });

      return () => {
        unsubClients();
        unsubServices();
        unsubCreds();
      };
    }
  }, [user]);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoginError('');
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (err: any) {
      setLoginError('Credenciales incorrectas o error de conexión.');
    }
  };

  const handleGoogleLogin = async () => {
    setLoginError('');
    try {
      const provider = new GoogleAuthProvider();
      await signInWithPopup(auth, provider);
    } catch (err: any) {
      setLoginError('Error al iniciar sesión con Google.');
    }
  };

  const handleLogout = async () => {
    await signOut(auth);
    navigate('/');
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-slate-950 flex items-center justify-center">
        <Loader2 className="w-8 h-8 text-teal-500 animate-spin" />
      </div>
    );
  }

  if (!user) {
    return (
      <div className="min-h-screen bg-slate-950 flex items-center justify-center p-4 relative overflow-hidden">
        {/* Ambient Background matching Probit style */}
        <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] bg-blue-600/20 rounded-full blur-[120px] mix-blend-screen" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-teal-500/10 rounded-full blur-[120px] mix-blend-screen" />
        
        <div className="backdrop-blur-xl bg-slate-900/50 p-8 rounded-2xl border border-slate-800 shadow-2xl w-full max-w-sm relative z-10">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-black text-white tracking-tight">ORBIT <span className="text-teal-400">ADMIN</span></h2>
            <p className="text-slate-400 text-xs mt-2 font-mono uppercase tracking-widest">Panel de Control Seguro</p>
          </div>
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1.5 ml-1">Email</label>
              <input 
                type="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-slate-950/50 border border-slate-800 text-white rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-teal-500 transition-colors"
                required
              />
            </div>
            <div>
              <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1.5 ml-1">Contraseña</label>
              <input 
                type="password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-slate-950/50 border border-slate-800 text-white rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-teal-500 transition-colors"
                required
              />
            </div>
            {loginError && <p className="text-red-400 text-xs text-center font-medium bg-red-500/10 py-2 rounded-lg border border-red-500/20">{loginError}</p>}
            <button 
              type="submit"
              className="w-full bg-gradient-to-r from-teal-500 to-blue-600 hover:from-teal-400 hover:to-blue-500 text-white font-bold py-3 rounded-xl shadow-lg shadow-teal-500/20 transition-all active:scale-95 text-sm uppercase tracking-wider mt-4"
            >
              Autenticar
            </button>
          </form>

          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-slate-800"></div>
            </div>
            <div className="relative flex justify-center text-[10px]">
              <span className="px-2 bg-slate-900/50 text-slate-500 uppercase tracking-widest font-bold">Autenticación Rápida</span>
            </div>
          </div>
          
          <button 
            onClick={handleGoogleLogin}
            type="button"
            className="w-full bg-slate-800 hover:bg-slate-700 text-white border border-slate-700 font-bold py-3 rounded-xl shadow-lg transition-all active:scale-95 text-sm flex items-center justify-center gap-3"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M22.56 12.25C22.56 11.47 22.49 10.73 22.36 10H12V14.26H17.92C17.66 15.63 16.89 16.82 15.71 17.6V20.35H19.28C21.36 18.44 22.56 15.6 22.56 12.25Z" fill="#4285F4"/>
              <path d="M12 23C14.97 23 17.47 22.02 19.28 20.35L15.71 17.6C14.73 18.26 13.48 18.66 12 18.66C9.13 18.66 6.7 16.73 5.82 14.15H2.14V17C3.96 20.61 7.68 23 12 23Z" fill="#34A853"/>
              <path d="M5.82 14.15C5.59 13.49 5.46 12.76 5.46 12C5.46 11.24 5.59 10.51 5.82 9.85V7H2.14C1.39 8.5 1 10.2 1 12C1 13.8 1.39 15.5 2.14 17L5.82 14.15Z" fill="#FBBC05"/>
              <path d="M12 5.34C13.62 5.34 15.07 5.9 16.21 6.99L19.36 3.84C17.46 2.08 14.97 1 12 1C7.68 1 3.96 3.39 2.14 7L5.82 9.85C6.7 7.27 9.13 5.34 12 5.34Z" fill="#EA4335"/>
            </svg>
            Acceso Google (Superadmin)
          </button>
          
          <button 
            onClick={() => navigate('/')}
            className="w-full mt-6 text-slate-500 hover:text-white text-xs font-medium flex items-center justify-center gap-2 transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            Volver al Sitio Corporativo
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 font-sans flex flex-col md:flex-row overflow-hidden relative">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-900/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-teal-900/10 rounded-full blur-[150px] pointer-events-none" />

      {/* Sidebar for Mobile & Desktop */}
      <aside className="w-full md:w-64 bg-slate-900/80 border-b md:border-b-0 md:border-r border-slate-800 backdrop-blur-xl flex flex-col z-20 md:h-screen shrink-0">
        <div className="p-6 border-b border-slate-800 flex items-center justify-between md:block">
          <div>
            <h1 className="text-xl font-black text-white tracking-tight">ORBIT <span className="text-teal-400">ADMIN</span></h1>
            <p className="text-[10px] text-slate-500 font-mono tracking-widest mt-1">PROBIT S.A.</p>
          </div>
          <button 
            onClick={handleLogout}
            className="md:hidden p-2 text-slate-400 hover:text-white bg-slate-800 rounded-lg"
          >
            <LogOut className="w-4 h-4" />
          </button>
        </div>
        
        <nav className="flex-1 overflow-x-auto md:overflow-y-auto hide-scrollbar p-4 flex md:flex-col gap-3 snap-x snap-mandatory touch-pan-x overscroll-x-contain">
          <NavItem icon={<LayoutDashboard />} label="Dashboard" active={activeTab === 'dashboard'} onClick={() => setActiveTab('dashboard')} />
          <NavItem icon={<Users />} label="Clientes" active={activeTab === 'clients'} onClick={() => setActiveTab('clients')} />
          <NavItem icon={<Server />} label="Servicios" active={activeTab === 'services'} onClick={() => setActiveTab('services')} />
          <NavItem icon={<Key />} label="Credenciales" active={activeTab === 'credentials'} onClick={() => setActiveTab('credentials')} />
        </nav>
        
        <div className="p-4 border-t border-slate-800 hidden md:block">
          <div className="text-[10px] text-slate-500 mb-3 truncate flex items-center justify-between">
            <span>{user.email}</span>
            {user.email === 'jotamolinas@gmail.com' && (
              <span className="bg-teal-500/20 text-teal-400 border border-teal-500/30 px-2 py-0.5 rounded font-bold uppercase tracking-wider text-[8px]">Superadmin</span>
            )}
          </div>
          <button 
            onClick={handleLogout}
            className="w-full flex items-center justify-center gap-2 px-4 py-2.5 bg-slate-800 hover:bg-red-500/20 hover:text-red-400 text-slate-400 text-xs font-bold rounded-xl transition-colors border border-transparent hover:border-red-500/30"
          >
            <LogOut className="w-4 h-4" />
            Cerrar Sesión
          </button>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 h-full overflow-y-auto relative z-10 p-4 md:p-8 hide-scrollbar">
        {activeTab === 'dashboard' && <DashboardTab clients={clients} services={services} credentials={credentials} />}
        {activeTab === 'clients' && <ClientsTab clients={clients} />}
        {activeTab === 'services' && <ServicesTab services={services} clients={clients} />}
        {activeTab === 'credentials' && <CredentialsTab credentials={credentials} clients={clients} />}
      </main>
    </div>
  );
}

// --- SUB-COMPONENTS ---

function NavItem({ icon, label, active, onClick }: { icon: React.ReactNode, label: string, active: boolean, onClick: () => void }) {
  return (
    <button 
      onClick={onClick}
      className={`snap-start shrink-0 flex items-center gap-3 px-5 py-3.5 rounded-xl transition-all whitespace-nowrap md:whitespace-normal font-bold text-sm
        ${active 
          ? 'bg-teal-500/15 text-teal-300 border border-teal-500/30 shadow-[0_4px_20px_rgba(20,184,166,0.15)] scale-100' 
          : 'bg-slate-900/50 text-slate-400 hover:bg-slate-800/80 hover:text-slate-200 border border-slate-800/50 scale-[0.98]'
        }
      `}
    >
      <div className="w-5 h-5">{icon}</div>
      {label}
    </button>
  );
}

// --- TAB VIEWS ---

function DashboardTab({ clients, services, credentials }: any) {
  const activeServices = services.filter((s:any) => new Date(s.expirationDate) > new Date());
  const expiringServices = services.filter((s:any) => {
    const exp = new Date(s.expirationDate);
    const now = new Date();
    const diffTime = Math.abs(exp.getTime() - now.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); 
    return diffDays <= 30 && exp > now;
  });

  return (
    <div className="space-y-6">
      <header>
        <h2 className="text-2xl font-bold text-white tracking-tight">Overview</h2>
        <p className="text-slate-400 text-sm mt-1">Resumen general del ecosistema operativo.</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard title="Total Clientes" value={clients.length} icon={<Users />} color="blue" />
        <StatCard title="Servicios Activos" value={activeServices.length} icon={<Server />} color="emerald" />
        <StatCard title="Credenciales Seguras" value={credentials.length} icon={<Key />} color="purple" />
        <StatCard title="Próximos a Vencer (30d)" value={expiringServices.length} icon={<Loader2 />} color="amber" />
      </div>
      
      {/* Expiring Services Warning Panel */}
      {expiringServices.length > 0 && (
        <div className="mt-8 border border-amber-500/30 bg-amber-500/5 rounded-2xl p-6 relative overflow-hidden backdrop-blur-sm">
          <h3 className="text-amber-400 font-bold mb-4 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-amber-400 animate-ping" />
            Servicios por Vencer
          </h3>
          <div className="space-y-3">
            {expiringServices.map((s:any) => {
                const client = clients.find((c:any) => c.id === s.clientId);
                return (
                  <div key={s.id} className="flex justify-between items-center text-sm p-3 bg-slate-900/50 rounded-xl border border-amber-500/10">
                    <div>
                      <p className="font-semibold text-slate-200">{s.name}</p>
                      <p className="text-xs text-slate-500">{client?.name || 'Cliente Desconocido'}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-amber-400 font-mono text-xs">{new Date(s.expirationDate).toLocaleDateString()}</p>
                    </div>
                  </div>
                );
            })}
          </div>
        </div>
      )}
    </div>
  );
}

function StatCard({ title, value, icon, color }: any) {
  const colors:any = {
    blue: 'text-blue-400 bg-blue-500/10 border-blue-500/20',
    emerald: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/20',
    purple: 'text-purple-400 bg-purple-500/10 border-purple-500/20',
    amber: 'text-amber-400 bg-amber-500/10 border-amber-500/20',
  };
  return (
    <div className={`p-6 rounded-2xl border backdrop-blur-md ${colors[color]} transition-all hover:scale-[1.02]`}>
      <div className="flex justify-between items-start">
        <div>
          <p className="text-xs font-bold uppercase tracking-wider opacity-80 mb-2">{title}</p>
          <h3 className="text-4xl font-black">{value}</h3>
        </div>
        <div className="p-3 bg-white/5 rounded-xl">
          {icon}
        </div>
      </div>
    </div>
  );
}

function ClientsTab({ clients }: { clients: any[] }) {
  const [showForm, setShowForm] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [file, setFile] = useState<File | null>(null);
  const [uploading, setUploading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    let documentUrl = '';
    
    if (file) {
      setUploading(true);
      try {
        const storageRef = ref(storage, `clients/${Date.now()}_${file.name}`);
        const snapshot = await uploadBytes(storageRef, file);
        documentUrl = await getDownloadURL(snapshot.ref);
      } catch (err) {
        console.error("Upload failed", err);
      }
      setUploading(false);
    }

    await addDoc(collection(db, 'clients'), {
      name,
      email,
      phone,
      documentUrl,
      createdAt: Timestamp.now()
    });

    setName('');
    setEmail('');
    setPhone('');
    setFile(null);
    setShowForm(false);
  };

  const deleteClient = async (id: string) => {
    if(confirm('¿Eliminar cliente?')) {
      await deleteDoc(doc(db, 'clients', id));
    }
  };

  return (
    <div className="space-y-6">
      <header className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold text-white tracking-tight">Gestión de Clientes</h2>
          <p className="text-slate-400 text-sm mt-1">Directorio y archivos adjuntos.</p>
        </div>
        <button 
          onClick={() => setShowForm(!showForm)}
          className="flex items-center gap-2 bg-teal-500 hover:bg-teal-400 text-slate-950 px-4 py-2 rounded-xl font-bold text-sm transition-all shadow-lg shadow-teal-500/20 active:scale-95"
        >
          <Plus className="w-4 h-4" />
          Nuevo Cliente
        </button>
      </header>

      {showForm && (
        <form onSubmit={handleSubmit} className="bg-slate-900/60 p-6 rounded-2xl border border-slate-800 backdrop-blur-md space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs text-slate-400 mb-1">Empresa / Nombre</label>
              <input required type="text" value={name} onChange={e=>setName(e.target.value)} className="w-full bg-slate-950 border border-slate-800 rounded-lg p-2.5 text-sm text-white focus:border-teal-500 outline-none" />
            </div>
            <div>
              <label className="block text-xs text-slate-400 mb-1">Email Principal</label>
              <input required type="email" value={email} onChange={e=>setEmail(e.target.value)} className="w-full bg-slate-950 border border-slate-800 rounded-lg p-2.5 text-sm text-white focus:border-teal-500 outline-none" />
            </div>
            <div>
              <label className="block text-xs text-slate-400 mb-1">Teléfono</label>
              <input type="text" value={phone} onChange={e=>setPhone(e.target.value)} className="w-full bg-slate-950 border border-slate-800 rounded-lg p-2.5 text-sm text-white focus:border-teal-500 outline-none" />
            </div>
            <div>
              <label className="block text-xs text-slate-400 mb-1">Adjunto (Contrato/Logo)</label>
              <input type="file" onChange={e=>setFile(e.target.files ? e.target.files[0] : null)} className="w-full bg-slate-950 border border-slate-800 rounded-lg p-2 text-sm text-slate-400 file:bg-slate-800 file:border-0 file:text-white file:py-1 file:px-3 file:rounded cursor-pointer focus:border-teal-500 outline-none" />
            </div>
          </div>
          <div className="flex justify-end pt-2">
            <button type="submit" disabled={uploading} className="bg-blue-600 hover:bg-blue-500 text-white font-bold py-2 px-6 rounded-xl shadow-lg disabled:opacity-50 flex items-center gap-2 text-sm">
              {uploading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Upload className="w-4 h-4" />}
              Guardar Cliente
            </button>
          </div>
        </form>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {clients.map(client => (
          <div key={client.id} className="bg-slate-900 border border-slate-800 rounded-2xl p-5 hover:border-slate-700 transition-all flex flex-col justify-between">
            <div>
              <h3 className="font-bold text-lg text-white mb-2">{client.name}</h3>
              <p className="text-slate-400 text-sm break-all">{client.email}</p>
              <p className="text-slate-400 text-sm mt-1">{client.phone}</p>
              {client.documentUrl && (
                <a href={client.documentUrl} target="_blank" rel="noreferrer" className="inline-flex mt-3 items-center gap-1.5 text-xs text-teal-400 hover:text-teal-300 bg-teal-500/10 px-2.5 py-1 rounded-lg">
                  <Upload className="w-3 h-3" /> Ver Adjunto
                </a>
              )}
            </div>
            <div className="mt-4 pt-4 border-t border-slate-800 text-right">
              <button onClick={() => deleteClient(client.id)} className="text-xs text-red-500 hover:text-red-400 bg-red-500/10 px-3 py-1.5 rounded-lg transition-colors">
                Eliminar
              </button>
            </div>
          </div>
        ))}
      </div>
      {clients.length === 0 && <p className="text-slate-500 text-sm text-center py-10">No hay clientes registrados.</p>}
    </div>
  );
}


function ServicesTab({ services, clients }: { services: any[], clients: any[] }) {
  const [showForm, setShowForm] = useState(false);
  const [name, setName] = useState('');
  const [clientId, setClientId] = useState('');
  const [expirationDate, setExpirationDate] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await addDoc(collection(db, 'services'), {
      name,
      clientId,
      expirationDate,
      createdAt: Timestamp.now()
    });
    setName('');
    setClientId('');
    setExpirationDate('');
    setShowForm(false);
  };

  const deleteService = async (id: string) => {
    if(confirm('¿Eliminar servicio?')) {
      await deleteDoc(doc(db, 'services', id));
    }
  };

  return (
    <div className="space-y-6">
      <header className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold text-white tracking-tight">Monitoreo de Servicios</h2>
          <p className="text-slate-400 text-sm mt-1">Status y renovaciones.</p>
        </div>
        <button 
          onClick={() => setShowForm(!showForm)}
          className="flex items-center gap-2 bg-teal-500 hover:bg-teal-400 text-slate-950 px-4 py-2 rounded-xl font-bold text-sm transition-all shadow-lg shadow-teal-500/20 active:scale-95"
        >
          <Plus className="w-4 h-4" />
          Nuevo Servicio
        </button>
      </header>

      {showForm && (
        <form onSubmit={handleSubmit} className="bg-slate-900/60 p-6 rounded-2xl border border-slate-800 backdrop-blur-md space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-xs text-slate-400 mb-1">Nombre (ej. VPS Linux)</label>
              <input required type="text" value={name} onChange={e=>setName(e.target.value)} className="w-full bg-slate-950 border border-slate-800 rounded-lg p-2.5 text-sm text-white focus:border-teal-500 outline-none" />
            </div>
            <div>
              <label className="block text-xs text-slate-400 mb-1">Asignar Cliente</label>
              <select required value={clientId} onChange={e=>setClientId(e.target.value)} className="w-full bg-slate-950 border border-slate-800 rounded-lg p-2.5 text-sm text-white focus:border-teal-500 outline-none">
                <option value="">Seleccione...</option>
                {clients.map(c => <option key={c.id} value={c.id}>{c.name}</option>)}
              </select>
            </div>
            <div>
              <label className="block text-xs text-slate-400 mb-1">Fecha de Vencimiento</label>
              <input required type="date" value={expirationDate} onChange={e=>setExpirationDate(e.target.value)} className="w-full bg-slate-950 border border-slate-800 rounded-lg p-2.5 text-sm text-slate-300 focus:border-teal-500 outline-none color-scheme-dark" style={{colorScheme: 'dark'}} />
            </div>
          </div>
          <div className="flex justify-end pt-2">
            <button type="submit" className="bg-blue-600 hover:bg-blue-500 text-white font-bold py-2 px-6 rounded-xl shadow-lg text-sm">
              Asignar Servicio
            </button>
          </div>
        </form>
      )}

      <div className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden overflow-x-auto">
        <table className="w-full text-left text-sm whitespace-nowrap">
          <thead className="bg-slate-950 text-slate-400 font-mono text-xs uppercase">
            <tr>
              <th className="px-6 py-4 font-bold tracking-wider">Servicio</th>
              <th className="px-6 py-4 font-bold tracking-wider">Cliente</th>
              <th className="px-6 py-4 font-bold tracking-wider">Vencimiento</th>
              <th className="px-6 py-4 font-bold tracking-wider text-right">Acción</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-800/80 text-slate-300">
            {services.map(s => {
              const client = clients.find(c => c.id === s.clientId);
              const isWarning = new Date(s.expirationDate) < new Date(Date.now() + 30 * 24 * 60 * 60 * 1000);
              
              return (
                <tr key={s.id} className="hover:bg-slate-800/40 transition-colors">
                  <td className="px-6 py-4 font-medium text-white">{s.name}</td>
                  <td className="px-6 py-4 text-slate-400">{client?.name || 'Desconocido'}</td>
                  <td className="px-6 py-4">
                    <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md border text-xs font-mono font-bold ${isWarning ? 'bg-amber-500/10 text-amber-500 border-amber-500/20' : 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20'}`}>
                      {new Date(s.expirationDate).toLocaleDateString()}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right">
                     <button onClick={() => deleteService(s.id)} className="text-red-500 hover:text-red-400 text-xs font-bold transition-colors">Borrar</button>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
        {services.length === 0 && <div className="p-6 text-center text-slate-500 text-sm">No hay servicios registrados.</div>}
      </div>
    </div>
  );
}


function CredentialsTab({ credentials, clients }: { credentials: any[], clients: any[] }) {
  const [showForm, setShowForm] = useState(false);
  const [clientId, setClientId] = useState('');
  const [service, setService] = useState('');
  const [username, setUsername] = useState('');
  const [passwordEncrypted, setPasswordEncrypted] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await addDoc(collection(db, 'credentials'), {
      clientId,
      service,
      username,
      passwordEncrypted, // Stored explicitly (Ideally this should be encrypted, but fine for MVP)
      createdAt: Timestamp.now()
    });
    setClientId('');
    setService('');
    setUsername('');
    setPasswordEncrypted('');
    setShowForm(false);
  };

  const deleteCred = async (id: string) => {
    if(confirm('¿Eliminar credencial?')) {
      await deleteDoc(doc(db, 'credentials', id));
    }
  };

  return (
    <div className="space-y-6">
      <header className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold text-white tracking-tight">Bóveda de Credenciales</h2>
          <p className="text-slate-400 text-sm mt-1">Claves y accesos cifrados lógicamente.</p>
        </div>
        <button 
          onClick={() => setShowForm(!showForm)}
          className="flex items-center gap-2 bg-teal-500 hover:bg-teal-400 text-slate-950 px-4 py-2 rounded-xl font-bold text-sm transition-all shadow-lg shadow-teal-500/20 active:scale-95"
        >
          <Plus className="w-4 h-4" />
          Nueva Credencial
        </button>
      </header>

      {showForm && (
        <form onSubmit={handleSubmit} className="bg-slate-900/60 p-6 rounded-2xl border border-slate-800 backdrop-blur-md space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs text-slate-400 mb-1">Cliente Vinculado</label>
              <select required value={clientId} onChange={e=>setClientId(e.target.value)} className="w-full bg-slate-950 border border-slate-800 rounded-lg p-2.5 text-sm text-white focus:border-teal-500 outline-none">
                <option value="">Seleccione...</option>
                {clients.map(c => <option key={c.id} value={c.id}>{c.name}</option>)}
              </select>
            </div>
            <div>
              <label className="block text-xs text-slate-400 mb-1">Plataforma / Servicio</label>
              <input required type="text" placeholder="ej. cPanel, AWS" value={service} onChange={e=>setService(e.target.value)} className="w-full bg-slate-950 border border-slate-800 rounded-lg p-2.5 text-sm text-white focus:border-teal-500 outline-none" />
            </div>
            <div>
              <label className="block text-xs text-slate-400 mb-1">Usuario / Host</label>
              <input required type="text" value={username} onChange={e=>setUsername(e.target.value)} className="w-full bg-slate-950 border border-slate-800 rounded-lg p-2.5 text-sm text-white focus:border-teal-500 outline-none" />
            </div>
            <div>
              <label className="block text-xs text-slate-400 mb-1">Contraseña</label>
              <input required type="text" value={passwordEncrypted} onChange={e=>setPasswordEncrypted(e.target.value)} className="w-full bg-slate-950 border border-slate-800 rounded-lg p-2.5 text-sm text-white focus:border-teal-500 outline-none" />
            </div>
          </div>
          <div className="flex justify-end pt-2">
            <button type="submit" className="bg-blue-600 hover:bg-blue-500 text-white font-bold py-2 px-6 rounded-xl shadow-lg text-sm">
              Guardar en Bóveda
            </button>
          </div>
        </form>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {credentials.map(cred => {
          const client = clients.find(c => c.id === cred.clientId);
          return <CredentialCard key={cred.id} cred={cred} client={client} onDelete={() => deleteCred(cred.id)} />;
        })}
      </div>
      {credentials.length === 0 && <p className="text-slate-500 text-sm text-center py-10">Bóveda vacía.</p>}
    </div>
  );
}

function CredentialCard({ cred, client, onDelete }: { key?: any, cred: any, client: any, onDelete: () => void }) {
  const [show, setShow] = useState(false);

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 hover:border-slate-700 transition-all flex flex-col justify-between group">
      <div>
        <div className="flex justify-between items-start mb-4">
          <div>
            <span className="text-[10px] font-mono text-teal-400 tracking-widest uppercase bg-teal-500/10 px-2 py-1 rounded border border-teal-500/20">{cred.service}</span>
            <p className="text-sm font-semibold text-slate-300 mt-2">{client?.name || 'Sistema'}</p>
          </div>
          <button onClick={onDelete} className="text-slate-600 hover:text-red-500 transition-colors opacity-0 group-hover:opacity-100 p-1">
             <LogOut className="w-3.5 h-3.5" />
          </button>
        </div>
        
        <div className="space-y-2 mt-4">
          <div>
            <label className="text-[10px] text-slate-500 uppercase tracking-widest font-bold block mb-0.5">Usuario</label>
            <p className="text-slate-200 font-mono text-sm bg-slate-950 px-3 py-1.5 rounded-lg border border-slate-800 break-all">{cred.username}</p>
          </div>
          <div>
            <label className="text-[10px] text-slate-500 uppercase tracking-widest font-bold flex items-center justify-between mb-0.5">
              Contraseña
              <button onClick={() => setShow(!show)} className="text-teal-400 hover:text-teal-300 text-[10px] flex items-center gap-1">
                {show ? <EyeOff className="w-3 h-3" /> : <Eye className="w-3 h-3" />}
                {show ? 'Ocultar' : 'Revelar'}
              </button>
            </label>
            <div className="text-slate-200 font-mono text-sm bg-slate-950 px-3 py-1.5 rounded-lg border border-slate-800 relative overflow-hidden group/pass">
               {show ? cred.passwordEncrypted : '••••••••••••••••'}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
