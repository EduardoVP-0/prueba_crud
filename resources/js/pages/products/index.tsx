import { Head } from '@inertiajs/react';
import { dashboard } from '@/routes';
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
    return (
        <>
            <Head title="Productos | Lista" />
            {
                products.length > 0 && (
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
                                    <TableCell className="text-right">
                                        
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
