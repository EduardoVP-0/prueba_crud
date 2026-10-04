import { Head, useForm } from '@inertiajs/react';
import { dashboard } from '@/routes';
import { index } from '@/routes/products';
import { Input } from '@/components/ui/input';
import { Textarea } from "@/components/ui/textarea"
import { Button } from '@/components/ui/button';
import { store } from '@/routes/products';  


export default function Create() {

    const { data, setData, post, processing, errors } = useForm({
        nombre: '',
        descripcion: '',
        stock: '',
        precio: ''
    })



    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        post(store.url());
    }

    return (
        <>
            <Head title="Productos | Crear" />
            <div className='w-8/12 p-4'>
                <form onSubmit={handleSubmit} method='post' className='space-y-4'>
                    <div className='gap-1.5'>
                        <Input
                            placeholder='Nombre del Producto'
                            value={data.nombre}
                            onChange={e => setData('nombre', e.target.value)}
                        ></Input>
                    </div>
                    <div className='gap-1.5'>
                        <Input
                            placeholder='Stock del Producto'
                            value={data.stock}
                            onChange={e => setData('stock', e.target.value)}
                        ></Input>
                    </div>
                    <div className='gap-1.5'>
                        <Input
                            placeholder='Precio del Producto'
                            value={data.precio}
                            onChange={e => setData('precio', e.target.value)}
                        ></Input>
                    </div>
                    <div className='gap-1.5'>
                        <Textarea
                            placeholder='Descripcion del Producto'
                            value={data.descripcion}
                            onChange={e => setData('descripcion', e.target.value)}
                        />
                    </div>
                    <div>
                        <Button
                            type='submit'
                        >
                            Crear Producto
                        </Button>
                    </div>
                </form>
            </div>
        </>
    );
}

Create.layout = {
    breadcrumbs: [
        {
            title: 'Dashboard',
            href: dashboard(),
        },
        {
            title: 'Productos',
            href: index(),
        },
        {
            title: 'Crear Producto'
        }
    ],
};
