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
import { Input } from './ui/input';
import Button from './Button';
import Image from 'next/image';
import useMediaQuery from '@/hooks/useMediaQuery';

const formSchema = z.object({
  name: z
    .string()
    .min(2, 'Nama harus minimal 2 karakter')
    .max(50, 'Nama maksimal 50 karakter'),
  address: z
    .string()
    .min(2, 'Alamat harus minimal 2 karakter')
    .max(100, 'Alamat maksimal 100 karakter'),
  phone: z
    .string()
    .min(10, 'Nomor telepon harus minimal 10 digit')
    .max(15, 'Nomor telepon maksimal 15 digit'),
  armada: z.string().optional(),
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
  const { isMobile } = useMediaQuery();

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log('Form submitted successfully!', values);

    // You can add WhatsApp integration here
    // const whatsappMessage = `Halo, saya ingin booking mobil ${values.armada || 'yang tersedia'}.\nNama: ${values.name}\nAlamat: ${values.address}\nWhatsApp: ${values.phone}`;
    // const whatsappUrl = `https://wa.me/6281234567890?text=${encodeURIComponent(whatsappMessage)}`;
    // window.open(whatsappUrl, '_blank');
  }

  return (
    <Form {...form}>
      <form
        id="order-form"
        onSubmit={form.handleSubmit(onSubmit, (errors) => {
          console.log('Form validation failed:', errors);
        })}
        className="flex flex-col space-y-4"
      >
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-lg lg:text-base">
                Nama Lengkap
              </FormLabel>
              <FormControl>
                <Input
                  placeholder="Peter Parker"
                  {...field}
                  className="h-12 lg:h-auto"
                />
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
              <FormLabel className="text-lg lg:text-base">Alamat</FormLabel>
              <FormControl>
                <Input
                  placeholder="Jalan Ave Road No.17, Makassar"
                  className="h-12 lg:h-auto"
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
              <FormLabel className="text-lg lg:text-base">
                Nomor WhatsApp
              </FormLabel>
              <FormControl>
                <Input
                  type="number"
                  inputMode="numeric"
                  placeholder="08233456701"
                  className="h-12 lg:h-auto"
                  {...field}
                />
              </FormControl>
              <FormDescription>Ketik nomor WhatsApp anda</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        {!isMobile && (
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
        )}
      </form>
    </Form>
  );
};

export default OrderForm;
