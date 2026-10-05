import { Head, Link, useForm } from '@inertiajs/react';
import { dashboard } from '@/routes';
import { create, edit, destroy as destroyRoute } from '@/routes/products';
import { Button } from '@/components/ui/button';
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"

interface Product {
    id: number;
    nombre: string;
    descripcion: string;
    stock: number;
    precio: number;
}


export default function Index({ products }: { products: Product[] }) {

    const { processing, delete: destroy } = useForm();

    const handleDelete = (id: number) => {
        if (confirm('¿Estas seguro de querer borrar este producto?')) {

            destroy(destroyRoute.url(id));
        }
    }

    return (
        <>
            <Head title="Productos | Lista" />

            <div className="m-4">
                <Button className="mb-4">
                    <Link href={create()}>
                        Crear Producto
                    </Link>
                </Button>
            </div>

            {products.length > 0 && (
                <Table>
                    <TableCaption>A list of your recent invoices.</TableCaption>
                    <TableHeader>
                        <TableRow>
                            <TableHead className="w-[100px]">ID</TableHead>
                            <TableHead>Nombre</TableHead>
                            <TableHead>Descripcion</TableHead>
                            <TableHead>Stock</TableHead>
                            <TableHead>Precio</TableHead>
                            <TableHead className="text-right">Acciones</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {products.map((product) => (
                            <TableRow key={product.id}>
                                <TableCell className="font-medium">{product.id}</TableCell>
                                <TableCell>{product.nombre}</TableCell>
                                <TableCell>{product.descripcion}</TableCell>
                                <TableCell>{product.stock}</TableCell>
                                <TableCell>{product.precio}</TableCell>
                                <TableCell className="text-right space-x-2">
                                    <Link href={edit(product.id)}>
                                    <Button className='bg-slate-500 hover:bg-slate-700'>
                                        Editar
                                    </Button>
                                    </Link>
                                    <Button
                                        className='bg-red-500 hover:bg-red-700'
                                        onClick={() => handleDelete(product.id)}
                                        disabled={processing}
                                    >
                                        Eliminar
                                    </Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            )
            }

        </>
    );
}

Index.layout = {
    breadcrumbs: [
        {
            title: 'Dashboard',
            href: dashboard(),
        },
        {
            title: 'Productos'
        }
    ],
};
