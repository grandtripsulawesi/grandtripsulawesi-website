'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import z from 'zod';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from './ui/form';
import Button from './Button';
import { Input } from './ui/input';
import Image from 'next/image';

const formSchema = z.object({
  name: z.string().min(2).max(50),
  address: z.string().min(2).max(50),
  phone: z.string().min(2).max(10),
  armada: z.string().min(2).max(10),
});

const OrderForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      address: '',
      phone: '',
      armada: '',
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col space-y-4"
      >
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nama Lengkap</FormLabel>
              <FormControl>
                <Input placeholder="Peter Parker" {...field} />
              </FormControl>
              <FormDescription>Ketik nama lengkap anda</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="address"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Alamat</FormLabel>
              <FormControl>
                <Input
                  placeholder="Jalan Ave Road No.17, Makassar"
                  {...field}
                />
              </FormControl>
              <FormDescription>Ketik alamat anda</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nomor WhatsApp</FormLabel>
              <FormControl>
                <Input
                  type="number"
                  inputMode="numeric"
                  placeholder="08233456701"
                  {...field}
                />
              </FormControl>
              <FormDescription>Ketik nomor WhatsApp anda</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          variant="default"
          type="submit"
          className="px-4 py-2.5 mt-4 lg:mt-auto w-fit bg-green-600"
        >
          <Image
            src={'/icons/icon_whatsapp.webp'}
            alt="icon for whatsapp"
            width={30}
            height={30}
            className="w-5 h-auto"
          />
          <span>Kirim Pesan</span>
        </Button>
      </form>
    </Form>
  );
};

export default OrderForm;
